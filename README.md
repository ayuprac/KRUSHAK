# Krushak: The Fertilizer Recommendation System

Full-stack app that trains ML models on `f2.csv` and serves fertilizer recommendations via a Flask API with a React + Tailwind frontend. Enhanced with soil health insights, weather integration, multi-language support, and comprehensive reporting.

## Project Structure

```
krushak/
  backend/
    app.py
    train.py
    requirements.txt
    soil_analysis.py
    weather_service.py
    report_generator.py
    utils/
      preprocess.py
    models/
    f2.csv
  frontend/
    package.json
    tailwind.config.js
    postcss.config.js
    vite.config.js
    index.html
    src/
      index.jsx
      index.css
      App.jsx
      i18n/
        index.js
      pages/
        HomePage.jsx
        PredictionPage.jsx
        CropHealthPage.jsx
      components/
        Navbar.jsx
        PredictionForm.jsx
        PredictionResult.jsx
        SoilHealthInsights.jsx
        WeatherWidget.jsx
        ReportDownload.jsx
        ReviewCard.jsx
        Footer.jsx
```

## Prerequisites
- Python 3.9+ available as `python3`
- Node.js 18+

## 1) Backend: setup, train, and run API

From the backend directory:
```bash
cd krushak/backend

# Create and activate a virtual environment
python3 -m venv .venv
source .venv/bin/activate

# Install Python dependencies
pip install -r requirements.txt

# Ensure dataset exists (already included)
ls f2.csv

# Train models (cleans models/ first, performs 80/20 split, calibrates probabilities)
python3 train.py
```

This will save artifacts under `krushak/backend/models/`:
- decision_tree.joblib, logistic_regression.joblib, random_forest.joblib, svm.joblib, naive_bayes.joblib
- preprocessor.joblib, label_encoder.joblib

Run the API (default port 5000; use 5050 if 5000 is busy):
```bash
# Option A: default
python3 app.py

# Option B: specific port (e.g., 5050)
PORT=5050 python3 app.py
```

Health check:
```bash
curl http://localhost:5050/api/health
```

Sample predict request:
```bash
curl -X POST http://localhost:5050/api/predict \
  -H 'Content-Type: application/json' \
  -d '{
    "Temparature": 25,
    "Humidity": 60,
    "Moisture": 40,
    "Soil_Type": "Loamy",
    "Crop_Type": "Wheat",
    "Nitrogen": 20,
    "Potassium": 20,
    "Phosphorous": 20
  }'
```

Response contains predictions and calibrated probabilities for five models: DecisionTree, LogisticRegression, RandomForest, SVM, NaiveBayes, plus soil health analysis.

### New API Endpoints

- **GET `/api/weather?city=XYZ`** - Fetch real-time weather data for a city
- **POST `/api/download-report/pdf`** - Generate and download PDF report
- **POST `/api/download-report/excel`** - Generate and download Excel report

### Enhanced Features

1. **Soil Health Analysis**: Automatic analysis of soil parameters with health score and recommendations
2. **Weather Integration**: Real-time weather data from OpenWeather API
3. **Multi-language Support**: English, Hindi, Marathi, Telugu with react-i18next
4. **Comprehensive Reports**: PDF and Excel reports with charts and detailed analysis

## 2) Frontend: install and run

From the frontend directory:
```bash
cd ../frontend

# Install dependencies
npm install

# If your API is not on http://localhost:5000, set VITE_API_URL (e.g., 5050)
VITE_API_URL=http://localhost:5050 npm run dev
```

Open the printed local URL (e.g., `http://localhost:5173` or `http://localhost:5174`).

The frontend will:
- Show a green-themed Home page with features and reviews
- Provide a Prediction page with:
  - Weather widget for real-time data integration
  - Form that calls the Flask API and visualizes per-model confidence
  - Soil health insights with recommendations
  - Download buttons for PDF/Excel reports
- Support 4 languages (English, Hindi, Marathi, Telugu) with language switcher
- Include a Crop Health stub page and a footer with contact info

## Troubleshooting
- macOS shells often alias `python` to nothing; use `python3`.
- If port 5000 is taken, start Flask on another port: `PORT=5050 python3 app.py`.
- If the frontend can't reach the API due to CORS, ensure the Flask server is running and reachable (CORS is enabled for `/api/*`).
- Update the API URL by setting `VITE_API_URL` when running `npm run dev`.
- Weather API requires internet connection; manual input still works if API fails.
- Report generation requires all prediction data; ensure you've run a prediction before downloading.

## Retraining
If `f2.csv` changes, rerun:
```bash
cd krushak/backend
source .venv/bin/activate
python3 train.py
```
This cleans `models/` and regenerates all artifacts.


