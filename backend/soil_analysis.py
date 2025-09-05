from typing import Dict, List, Any
import pandas as pd
from translations import get_translation, get_soil_type_recommendation


def analyze_soil_health(input_data: Dict[str, Any], language: str = 'en') -> Dict[str, Any]:
    """
    Analyze soil health based on input parameters and provide recommendations.
    
    Args:
        input_data: Dictionary containing soil parameters
        language: Language code for translations (default: 'en')
        
    Returns:
        Dictionary with soil health insights and recommendations
    """
    insights = []
    recommendations = []
    
    # Extract values with defaults
    nitrogen = input_data.get('Nitrogen', 0)
    potassium = input_data.get('Potassium', 0)
    phosphorous = input_data.get('Phosphorous', 0)
    temperature = input_data.get('Temparature', 25)
    humidity = input_data.get('Humidity', 60)
    moisture = input_data.get('Moisture', 40)
    soil_type = input_data.get('Soil_Type', 'Loamy')
    
    # Nitrogen analysis
    if nitrogen < 20:
        insights.append(get_translation('soil_nitrogen_low', language))
        recommendations.append(get_translation('add_nitrogen_fertilizers', language))
    elif nitrogen > 45:
        insights.append(get_translation('soil_nitrogen_high', language))
        recommendations.append(get_translation('avoid_nitrogen_heavy', language))
    else:
        insights.append(get_translation('soil_nitrogen_adequate', language))
    
    # Potassium analysis
    if potassium < 15:
        insights.append(get_translation('soil_potassium_low', language))
        recommendations.append(get_translation('add_potassium_sulfate', language))
    elif potassium > 35:
        insights.append(get_translation('soil_potassium_high', language))
        recommendations.append(get_translation('reduce_potassium_inputs', language))
    else:
        insights.append(get_translation('soil_potassium_adequate', language))
    
    # Phosphorus analysis
    if phosphorous < 15:
        insights.append(get_translation('soil_phosphorus_low', language))
        recommendations.append(get_translation('add_bone_meal', language))
    elif phosphorous > 35:
        insights.append(get_translation('soil_phosphorus_high', language))
        recommendations.append(get_translation('avoid_phosphorus_heavy', language))
    else:
        insights.append(get_translation('soil_phosphorus_adequate', language))
    
    # Temperature analysis
    if temperature < 15:
        insights.append(get_translation('temperature_low', language))
        recommendations.append(get_translation('cold_tolerant_crops', language))
    elif temperature > 35:
        insights.append(get_translation('temperature_high', language))
        recommendations.append(get_translation('adequate_irrigation', language))
    else:
        insights.append(get_translation('temperature_optimal', language))
    
    # Humidity analysis
    if humidity < 40:
        insights.append(get_translation('humidity_low', language))
        recommendations.append(get_translation('increase_irrigation', language))
    elif humidity > 80:
        insights.append(get_translation('humidity_high', language))
        recommendations.append(get_translation('good_drainage', language))
    else:
        insights.append(get_translation('humidity_suitable', language))
    
    # Moisture analysis
    if moisture < 30:
        insights.append(get_translation('moisture_low', language))
        recommendations.append(get_translation('increase_irrigation_organic', language))
    elif moisture > 70:
        insights.append(get_translation('moisture_high', language))
        recommendations.append(get_translation('improve_drainage', language))
    else:
        insights.append(get_translation('moisture_adequate', language))
    
    # Soil type specific recommendations
    if soil_type:
        insights.append(f"Soil type: {soil_type}")
        recommendations.append(get_soil_type_recommendation(soil_type, language))
    
    # Overall soil health score (0-100)
    health_score = calculate_soil_health_score(input_data)
    
    return {
        'health_score': health_score,
        'insights': insights,
        'recommendations': recommendations,
        'overall_status': get_overall_status(health_score, language)
    }


def calculate_soil_health_score(input_data: Dict[str, Any]) -> int:
    """Calculate overall soil health score based on parameters."""
    scores = []
    
    nitrogen = input_data.get('Nitrogen', 0)
    potassium = input_data.get('Potassium', 0)
    phosphorous = input_data.get('Phosphorous', 0)
    temperature = input_data.get('Temparature', 25)
    humidity = input_data.get('Humidity', 60)
    moisture = input_data.get('Moisture', 40)
    
    # Nitrogen scoring (optimal range: 20-45)
    if 20 <= nitrogen <= 45:
        scores.append(100)  # Perfect
    elif 15 <= nitrogen < 20 or 45 < nitrogen <= 55:
        scores.append(70)   # Good
    elif 10 <= nitrogen < 15 or 55 < nitrogen <= 65:
        scores.append(40)   # Fair
    else:
        scores.append(20)   # Poor
    
    # Potassium scoring (optimal range: 15-35)
    if 15 <= potassium <= 35:
        scores.append(100)
    elif 10 <= potassium < 15 or 35 < potassium <= 45:
        scores.append(70)
    elif 5 <= potassium < 10 or 45 < potassium <= 55:
        scores.append(40)
    else:
        scores.append(20)
    
    # Phosphorus scoring (optimal range: 15-35)
    if 15 <= phosphorous <= 35:
        scores.append(100)
    elif 10 <= phosphorous < 15 or 35 < phosphorous <= 45:
        scores.append(70)
    elif 5 <= phosphorous < 10 or 45 < phosphorous <= 55:
        scores.append(40)
    else:
        scores.append(20)
    
    # Temperature scoring (optimal range: 15-35)
    if 15 <= temperature <= 35:
        scores.append(100)
    elif 10 <= temperature < 15 or 35 < temperature <= 40:
        scores.append(70)
    elif 5 <= temperature < 10 or 40 < temperature <= 45:
        scores.append(40)
    else:
        scores.append(20)
    
    # Humidity scoring (optimal range: 40-80)
    if 40 <= humidity <= 80:
        scores.append(100)
    elif 30 <= humidity < 40 or 80 < humidity <= 90:
        scores.append(70)
    elif 20 <= humidity < 30 or 90 < humidity <= 95:
        scores.append(40)
    else:
        scores.append(20)
    
    # Moisture scoring (optimal range: 30-70)
    if 30 <= moisture <= 70:
        scores.append(100)
    elif 20 <= moisture < 30 or 70 < moisture <= 80:
        scores.append(70)
    elif 10 <= moisture < 20 or 80 < moisture <= 90:
        scores.append(40)
    else:
        scores.append(20)
    
    # Calculate weighted average score (nutrients are more critical)
    if scores:
        # Weight nutrients more heavily (60% weight) vs environmental factors (40% weight)
        nutrient_scores = scores[:3]  # Nitrogen, Potassium, Phosphorus
        env_scores = scores[3:]       # Temperature, Humidity, Moisture
        
        if nutrient_scores and env_scores:
            nutrient_avg = sum(nutrient_scores) / len(nutrient_scores)
            env_avg = sum(env_scores) / len(env_scores)
            weighted_score = (nutrient_avg * 0.6) + (env_avg * 0.4)
            return int(weighted_score)
        else:
            return int(sum(scores) / len(scores))
    else:
        return 50


def get_overall_status(score: int, language: str = 'en') -> str:
    """Get overall soil health status based on score."""
    if score >= 80:
        return get_translation('excellent', language)
    elif score >= 60:
        return get_translation('good', language)
    elif score >= 40:
        return get_translation('fair', language)
    else:
        return get_translation('poor', language)
