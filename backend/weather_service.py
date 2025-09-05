import requests
from typing import Dict, Any, Optional
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# OpenWeather API configuration
WEATHER_API_KEY = "b9ea8b5754990ff0b4316c4e435f7764"
WEATHER_BASE_URL = "http://api.openweathermap.org/data/2.5/weather"


def get_weather_data(city: str) -> Optional[Dict[str, Any]]:
    """
    Fetch weather data for a given city using OpenWeather API.
    
    Args:
        city: City name to get weather for
        
    Returns:
        Dictionary with weather data or None if failed
    """
    try:
        params = {
            'q': city,
            'appid': WEATHER_API_KEY,
            'units': 'metric'  # Get temperature in Celsius
        }
        
        response = requests.get(WEATHER_BASE_URL, params=params, timeout=10)
        response.raise_for_status()
        
        data = response.json()
        
        # Extract relevant weather information
        weather_data = {
            'temperature': round(data['main']['temp'], 1),
            'humidity': data['main']['humidity'],
            'pressure': data['main']['pressure'],
            'description': data['weather'][0]['description'],
            'wind_speed': data.get('wind', {}).get('speed', 0),
            'city': data['name'],
            'country': data['sys']['country'],
            'rainfall': data.get('rain', {}).get('1h', 0)  # Rainfall in last hour (mm)
        }
        
        logger.info(f"Weather data fetched successfully for {city}")
        return weather_data
        
    except requests.exceptions.RequestException as e:
        logger.error(f"Error fetching weather data for {city}: {e}")
        return None
    except KeyError as e:
        logger.error(f"Unexpected weather data format for {city}: {e}")
        return None
    except Exception as e:
        logger.error(f"Unexpected error fetching weather for {city}: {e}")
        return None


def get_weather_for_coordinates(lat: float, lon: float) -> Optional[Dict[str, Any]]:
    """
    Fetch weather data using latitude and longitude coordinates.
    
    Args:
        lat: Latitude
        lon: Longitude
        
    Returns:
        Dictionary with weather data or None if failed
    """
    try:
        params = {
            'lat': lat,
            'lon': lon,
            'appid': WEATHER_API_KEY,
            'units': 'metric'
        }
        
        response = requests.get(WEATHER_BASE_URL, params=params, timeout=10)
        response.raise_for_status()
        
        data = response.json()
        
        weather_data = {
            'temperature': round(data['main']['temp'], 1),
            'humidity': data['main']['humidity'],
            'pressure': data['main']['pressure'],
            'description': data['weather'][0]['description'],
            'wind_speed': data.get('wind', {}).get('speed', 0),
            'city': data['name'],
            'country': data['sys']['country'],
            'rainfall': data.get('rain', {}).get('1h', 0)
        }
        
        logger.info(f"Weather data fetched successfully for coordinates {lat}, {lon}")
        return weather_data
        
    except Exception as e:
        logger.error(f"Error fetching weather data for coordinates {lat}, {lon}: {e}")
        return None


def get_user_location_weather() -> Optional[Dict[str, Any]]:
    """
    Attempt to get weather data for user's current location.
    This is a placeholder - in a real app, you'd use browser geolocation API.
    
    Returns:
        Dictionary with weather data or None if failed
    """
    # For demo purposes, return weather for a default city
    # In production, this would integrate with frontend geolocation
    return get_weather_data("Mumbai")
