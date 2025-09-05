import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Cloud, Droplets, Thermometer, Eye, Wind, Sunrise, Sunset, Gauge } from 'lucide-react'

export default function WeatherWidget() {
  const { t } = useTranslation()
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const API_KEY = 'b9ea8b5754990ff0b4316c4e435f7764'
  const DEFAULT_CITY = 'Pune'

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${DEFAULT_CITY}&appid=${API_KEY}&units=metric`
        )
        
        if (!response.ok) {
          throw new Error('Failed to fetch weather data')
        }
        
        const data = await response.json()
        setWeatherData(data)
      } catch (err) {
        setError(err.message)
        // Fallback data for demo purposes
        setWeatherData({
          main: { 
            temp: 28, 
            humidity: 65, 
            pressure: 1013,
            feels_like: 30,
            temp_min: 25,
            temp_max: 32
          },
          weather: [{ description: 'Partly cloudy', main: 'Clouds' }],
          name: DEFAULT_CITY,
          rain: { '1h': 0.5 },
          wind: { speed: 3.5, deg: 180 },
          sys: { sunrise: 1640995200, sunset: 1641038400 },
          visibility: 10000
        })
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [])

  if (loading) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cloud className="h-5 w-5 text-primary" />
            {t('currentWeather')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error && !weatherData) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cloud className="h-5 w-5 text-primary" />
            {t('currentWeather')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">{t('weatherDataUnavailable')}</p>
        </CardContent>
      </Card>
    )
  }

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    })
  }

  const getWindDirection = (degrees) => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
    const index = Math.round(degrees / 45) % 8
    return directions[index]
  }

  return (
    <Card className="w-full shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Cloud className="h-5 w-5 text-primary" />
          {t('currentWeather')} - {weatherData?.name || DEFAULT_CITY}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Main Weather Info */}
        <div className="mb-4 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold text-gray-800">
                {Math.round(weatherData?.main?.temp || 0)}°C
              </div>
              <div className="text-sm text-gray-600 capitalize">
                {weatherData?.weather?.[0]?.description || 'Clear'}
              </div>
              <div className="text-xs text-gray-500">
                Feels like {Math.round(weatherData?.main?.feels_like || 0)}°C
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">
                H: {Math.round(weatherData?.main?.temp_max || 0)}°C
              </div>
              <div className="text-sm text-gray-600">
                L: {Math.round(weatherData?.main?.temp_min || 0)}°C
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Weather Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Droplets className="h-5 w-5 text-blue-500" />
            <div>
              <p className="text-sm font-medium">{weatherData?.main?.humidity || 0}%</p>
              <p className="text-xs text-gray-500">Humidity</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Wind className="h-5 w-5 text-green-500" />
            <div>
              <p className="text-sm font-medium">
                {weatherData?.wind?.speed || 0} m/s {getWindDirection(weatherData?.wind?.deg || 0)}
              </p>
              <p className="text-xs text-gray-500">Wind</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Gauge className="h-5 w-5 text-purple-500" />
            <div>
              <p className="text-sm font-medium">{weatherData?.main?.pressure || 0} hPa</p>
              <p className="text-xs text-gray-500">Pressure</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Eye className="h-5 w-5 text-gray-500" />
            <div>
              <p className="text-sm font-medium">
                {weatherData?.visibility ? `${(weatherData.visibility / 1000).toFixed(1)} km` : 'N/A'}
              </p>
              <p className="text-xs text-gray-500">Visibility</p>
            </div>
          </div>
        </div>

        {/* Rain and Sun Info */}
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
            <Droplets className="h-5 w-5 text-blue-600" />
            <div>
              <p className="text-sm font-medium">
                {weatherData?.rain?.['1h'] ? `${weatherData.rain['1h']}mm` : '0mm'}
              </p>
              <p className="text-xs text-gray-500">Rain (1h)</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
            <Sunrise className="h-5 w-5 text-yellow-500" />
            <div>
              <p className="text-sm font-medium">
                {weatherData?.sys?.sunrise ? formatTime(weatherData.sys.sunrise) : 'N/A'}
              </p>
              <p className="text-xs text-gray-500">Sunrise</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}