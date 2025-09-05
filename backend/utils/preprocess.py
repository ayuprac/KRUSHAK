from __future__ import annotations

from typing import Dict, Any

import pandas as pd


def coerce_payload(payload: Dict[str, Any]) -> Dict[str, Any]:
    # Basic coercion and defaults if needed
    defaults = {
        "Temparature": 25,
        "Humidity": 60,
        "Moisture": 40,
        "Soil_Type": "Loamy",
        "Crop_Type": "Wheat",
        "Nitrogen": 20,
        "Potassium": 20,
        "Phosphorous": 20,
    }
    coerced = {**defaults, **(payload or {})}
    return coerced


def dataframe_from_payload(payload: Dict[str, Any]) -> pd.DataFrame:
    payload = coerce_payload(payload)
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


