from pathlib import Path
import os
from typing import Dict, Any, List

from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import joblib
import numpy as np
import pandas as pd
import io
import base64

from soil_analysis import analyze_soil_health
from weather_service import get_weather_data, get_weather_for_coordinates
from report_generator import generate_pdf_report, generate_excel_report


MODELS_DIR = Path(__file__).parent / "models"


def load_artifacts() -> Dict[str, Any]:
    artifacts: Dict[str, Any] = {}
    # Preprocessor for X and label encoder for y
    artifacts["preprocessor"] = joblib.load(MODELS_DIR / "preprocessor.joblib")
    artifacts["label_encoder"] = joblib.load(MODELS_DIR / "label_encoder.joblib")

    # Models
    artifacts["models"] = {
        "RandomForestClassifier": joblib.load(MODELS_DIR / "random_forest.joblib"),
        "DecisionTreeClassifier": joblib.load(MODELS_DIR / "decision_tree.joblib"),
        "LogisticRegression": joblib.load(MODELS_DIR / "logistic_regression.joblib"),
        "SVC": joblib.load(MODELS_DIR / "svm.joblib"),
        "GaussianNB": joblib.load(MODELS_DIR / "naive_bayes.joblib"),
    }
    return artifacts


def dataframe_from_payload(payload: Dict[str, Any]) -> pd.DataFrame:
    # Ensure column order matches training features
    columns = [
        "Temparature",
        "Humidity",
        "Moisture",
        "Soil_Type",
        "Crop_Type",
        "Nitrogen",
        "Potassium",
        "Phosphorous",
    ]
    row = {col: payload.get(col) for col in columns}
    return pd.DataFrame([row], columns=columns)


def make_predictions(artifacts: Dict[str, Any], input_df: pd.DataFrame) -> Dict[str, Any]:
    preprocessor = artifacts["preprocessor"]
    y_encoder = artifacts["label_encoder"]
    X_processed = preprocessor.transform(input_df)

    results: Dict[str, Any] = {}
    for model_name, model in artifacts["models"].items():
        preds = model.predict(X_processed)
        pred_label = y_encoder.inverse_transform(preds)[0]
        # Probabilities per label
        proba: List[float] = []
        labels: List[str] = []
        if hasattr(model, "predict_proba"):
            proba = model.predict_proba(X_processed)[0].tolist()
            # Map model classes (encoded) back to label strings
            labels = y_encoder.inverse_transform(model.classes_).tolist()
        # Build probability mapping
        prob_map = {label: float(p) for label, p in zip(labels, proba)}
        results[model_name] = {
            "prediction": pred_label,
            "probabilities": prob_map,
        }
    return results


def create_app() -> Flask:
    app = Flask(__name__)
    # Allow all origins for API routes
    CORS(app, resources={r"/api/*": {"origins": "*"}})

    artifacts = load_artifacts()

    @app.route("/api/health", methods=["GET"])
    def health() -> Any:
        return jsonify({"status": "ok"})

    @app.route("/api/predict", methods=["POST"])
    def predict() -> Any:
        try:
            payload = request.get_json(force=True)
            language = payload.get('language', 'en')  # Get language from request
            input_df = dataframe_from_payload(payload)
            results = make_predictions(artifacts, input_df)
            
            # Add soil health analysis with language support
            soil_health = analyze_soil_health(payload, language)
            
            return jsonify({
                "ok": True, 
                "results": results,
                "soil_health": soil_health
            })
        except Exception as exc:  # noqa: BLE001
            return jsonify({"ok": False, "error": str(exc)}), 400

    @app.route("/api/weather", methods=["GET"])
    def weather() -> Any:
        try:
            city = request.args.get('city')
            lat = request.args.get('lat', type=float)
            lon = request.args.get('lon', type=float)
            
            if city:
                weather_data = get_weather_data(city)
            elif lat and lon:
                weather_data = get_weather_for_coordinates(lat, lon)
            else:
                return jsonify({"ok": False, "error": "City name or coordinates required"}), 400
            
            if weather_data:
                return jsonify({"ok": True, "weather": weather_data})
            else:
                return jsonify({"ok": False, "error": "Failed to fetch weather data"}), 500
                
        except Exception as exc:  # noqa: BLE001
            return jsonify({"ok": False, "error": str(exc)}), 400

    @app.route("/api/download-report/pdf", methods=["POST"])
    def download_pdf_report() -> Any:
        try:
            data = request.get_json(force=True)
            input_data = data.get('input_data', {})
            predictions = data.get('predictions', {})
            soil_health = data.get('soil_health', {})
            weather_data = data.get('weather_data')
            language = data.get('language', 'en')  # Get language from request
            
            pdf_content = generate_pdf_report(input_data, predictions, soil_health, weather_data, language)
            
            return send_file(
                io.BytesIO(pdf_content),
                mimetype='application/pdf',
                as_attachment=True,
                download_name='krushak_report.pdf'
            )
        except Exception as exc:  # noqa: BLE001
            return jsonify({"ok": False, "error": str(exc)}), 400

    @app.route("/api/download-report/excel", methods=["POST"])
    def download_excel_report() -> Any:
        try:
            data = request.get_json(force=True)
            input_data = data.get('input_data', {})
            predictions = data.get('predictions', {})
            soil_health = data.get('soil_health', {})
            weather_data = data.get('weather_data')
            language = data.get('language', 'en')  # Get language from request
            
            excel_content = generate_excel_report(input_data, predictions, soil_health, weather_data, language)
            
            return send_file(
                io.BytesIO(excel_content),
                mimetype='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                as_attachment=True,
                download_name='krushak_report.xlsx'
            )
        except Exception as exc:  # noqa: BLE001
            return jsonify({"ok": False, "error": str(exc)}), 400

    return app


if __name__ == "__main__":
    app = create_app()
    port = int(os.getenv("PORT", "5000"))
    app.run(host="0.0.0.0", port=port, debug=True)


