from pathlib import Path
from typing import Tuple, Dict
import shutil

import joblib
import pandas as pd
import numpy as np
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder, StandardScaler, LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.naive_bayes import GaussianNB
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report
from sklearn.calibration import CalibratedClassifierCV


BASE_DIR = Path(__file__).parent
DATA_PATH = BASE_DIR / "f2.csv"
MODELS_DIR = BASE_DIR / "models"


def load_data() -> pd.DataFrame:
    return pd.read_csv(DATA_PATH)


def get_feature_columns() -> list:
    return [
        "Temparature",
        "Humidity",
        "Moisture",
        "Soil_Type",
        "Crop_Type",
        "Nitrogen",
        "Potassium",
        "Phosphorous",
    ]


def build_preprocessor() -> ColumnTransformer:
    numeric_features = ["Temparature", "Humidity", "Moisture", "Nitrogen", "Potassium", "Phosphorous"]
    categorical_features = ["Soil_Type", "Crop_Type"]
    return ColumnTransformer(
        transformers=[
            ("num", StandardScaler(), numeric_features),
            ("cat", OneHotEncoder(handle_unknown="ignore", sparse_output=False), categorical_features),
        ]
    )


def clean_models_dir() -> None:
    if MODELS_DIR.exists():
        for item in MODELS_DIR.iterdir():
            if item.is_file() or item.is_symlink():
                item.unlink(missing_ok=True)  # type: ignore[call-arg]
            elif item.is_dir():
                shutil.rmtree(item, ignore_errors=True)
    else:
        MODELS_DIR.mkdir(parents=True, exist_ok=True)


def train_and_save_models() -> None:
    # Load data
    df = load_data()
    feature_cols = get_feature_columns()
    target_col = "Fertilizer"

    X = df[feature_cols].copy()
    y = df[target_col].copy()

    # Encode labels
    label_encoder = LabelEncoder()
    y_encoded = label_encoder.fit_transform(y)

    # Train/test split (80/20) with stratification
    X_train, X_test, y_train, y_test = train_test_split(
        X, y_encoded, test_size=0.2, random_state=42, stratify=y_encoded
    )

    # Build and fit preprocessor on training set only
    preprocessor = build_preprocessor()
    preprocessor.fit(X_train)

    X_train_processed = preprocessor.transform(X_train)
    X_test_processed = preprocessor.transform(X_test)

    # Choose calibration folds based on the smallest class count in y_train to avoid errors
    min_class_count = int(np.bincount(y_train).min())
    cv_splits = max(2, min(5, min_class_count))

    # Define calibrated models
    models = {
        "decision_tree": CalibratedClassifierCV(
            estimator=DecisionTreeClassifier(random_state=42), method="sigmoid", cv=cv_splits
        ),
        "logistic_regression": CalibratedClassifierCV(
            estimator=LogisticRegression(max_iter=200, multi_class="auto"), method="sigmoid", cv=cv_splits
        ),
        "random_forest": CalibratedClassifierCV(
            estimator=RandomForestClassifier(n_estimators=200, random_state=42), method="sigmoid", cv=cv_splits
        ),
        "svm": CalibratedClassifierCV(
            estimator=SVC(probability=True, kernel="rbf", random_state=42), method="sigmoid", cv=cv_splits
        ),
        "naive_bayes": CalibratedClassifierCV(
            estimator=GaussianNB(), method="sigmoid", cv=cv_splits
        ),
    }

    # Train and evaluate
    results: Dict[str, float] = {}
    reports: Dict[str, str] = {}
    for name, model in models.items():
        model.fit(X_train_processed, y_train)
        y_pred = model.predict(X_test_processed)
        acc = accuracy_score(y_test, y_pred)
        # Prepare class names aligned with labels used in report
        labels_sorted = sorted(set(y_test))
        target_names = label_encoder.inverse_transform(labels_sorted)
        report = classification_report(
            y_test, y_pred, labels=labels_sorted, target_names=target_names, zero_division=0
        )
        results[name] = acc
        reports[name] = report

    # Clean and save artifacts only after successful training
    MODELS_DIR.mkdir(parents=True, exist_ok=True)
    clean_models_dir()
    joblib.dump(preprocessor, MODELS_DIR / "preprocessor.joblib")
    joblib.dump(label_encoder, MODELS_DIR / "label_encoder.joblib")
    joblib.dump(models["decision_tree"], MODELS_DIR / "decision_tree.joblib")
    joblib.dump(models["logistic_regression"], MODELS_DIR / "logistic_regression.joblib")
    joblib.dump(models["random_forest"], MODELS_DIR / "random_forest.joblib")
    joblib.dump(models["svm"], MODELS_DIR / "svm.joblib")
    joblib.dump(models["naive_bayes"], MODELS_DIR / "naive_bayes.joblib")

    # Print evaluation metrics
    print("\n=== Evaluation Metrics (Test Set) ===")
    for name in models.keys():
        print(f"\nModel: {name}")
        print(f"Accuracy: {results[name]:.4f}")
        print("Classification Report:\n" + reports[name])

    # Summary
    print("\n=== Training Summary ===")
    artifact_map = {
        "decision_tree": MODELS_DIR / "decision_tree.joblib",
        "logistic_regression": MODELS_DIR / "logistic_regression.joblib",
        "random_forest": MODELS_DIR / "random_forest.joblib",
        "svm": MODELS_DIR / "svm.joblib",
        "naive_bayes": MODELS_DIR / "naive_bayes.joblib",
    }
    for name, acc in results.items():
        artifact = artifact_map[name]
        print(f"{name}: accuracy={acc:.4f}, saved_to={artifact}")
    print(f"Preprocessor saved_to={MODELS_DIR / 'preprocessor.joblib'}")
    print(f"Label encoder saved_to={MODELS_DIR / 'label_encoder.joblib'}")


if __name__ == "__main__":
    train_and_save_models()


