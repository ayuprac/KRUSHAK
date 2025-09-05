import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Cloud, MapPin, Thermometer, Droplets, Leaf, Zap, Wind } from 'lucide-react'

const initial = {
  Temparature: '',
  Humidity: '',
  Moisture: '',
  Soil_Type: '',
  Crop_Type: '',
  Nitrogen: '',
  Potassium: '',
  Phosphorous: '',
}

export default function EnhancedPredictionForm({ onResult, weatherData, onWeatherData }) {
  const { t, i18n } = useTranslation()
  const [form, setForm] = useState(initial)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [city, setCity] = useState('')
  const [weatherLoading, setWeatherLoading] = useState(false)
  const [weatherError, setWeatherError] = useState('')

  // Auto-fill form with weather data when available
  useEffect(() => {
    if (weatherData) {
      setForm(prev => ({
        ...prev,
        Temparature: weatherData.temperature || '',
        Humidity: weatherData.humidity || '',
        Moisture: weatherData.rainfall ? Math.min(weatherData.rainfall * 2, 80) : ''
      }))
    }
  }, [weatherData])

  const update = (k, v) => setForm(prev => ({ ...prev, [k]: v }))

  const fetchWeather = async () => {
    if (!city.trim()) return
    
    setWeatherLoading(true)
    setWeatherError('')
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'
      const response = await fetch(`${apiUrl}/api/weather?city=${encodeURIComponent(city)}`)
      const data = await response.json()
      
      if (data.ok) {
        onWeatherData(data.weather)
      } else {
        setWeatherError(data.error || 'Failed to fetch weather data')
      }
    } catch (err) {
      setWeatherError('Failed to fetch weather data')
    } finally {
      setWeatherLoading(false)
    }
  }

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'
      const res = await fetch(`${apiUrl}/api/predict`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          language: i18n.language
        }),
      })
      const data = await res.json()
      if (!data.ok) throw new Error(data.error || 'Prediction failed')
      onResult(data.results, data.soil_health, form, weatherData)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const soilTypes = ['Loamy', 'Clayey', 'Sandy', 'Red', 'Black']
  const cropTypes = [
    'Wheat', 'Paddy', 'Pulses', 'Sugarcane', 'Maize', 'Cotton', 
    'Barley', 'Tobacco', 'Ground Nuts', 'Millets', 'Coffee', 
    'Pomegranate', 'Rice', 'Watermelon', 'Kidneybeans', 'Orange', 'Oil seeds'
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Weather Section */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cloud className="h-5 w-5 text-primary" />
{t('weatherData')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <Label htmlFor="city">{t('cityName')}</Label>
              <div className="flex gap-2 mt-1">
                <Input
                  id="city"
                  type="text"
                  placeholder="Enter city name (e.g., Pune, Mumbai, Delhi)"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="flex-1"
                />
                <Button 
                  type="button"
                  onClick={fetchWeather}
                  disabled={weatherLoading || !city.trim()}
                  variant="outline"
                >
                  {weatherLoading ? t('loading') : t('getWeather')}
                </Button>
              </div>
              {weatherError && (
                <p className="text-sm text-red-600 mt-1">{weatherError}</p>
              )}
            </div>
          </div>
          
          {weatherData && (
            <div className="mt-4 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-green-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-green-800 text-lg">
                    {weatherData.city || city}
                  </span>
                </div>
                {weatherData.icon && (
                  <img 
                    src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                    alt="Weather icon"
                    className="h-12 w-12"
                  />
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg">
                  <Thermometer className="h-5 w-5 text-orange-500" />
                  <div>
                    <p className="text-sm text-gray-600">🌡️ {t('temperature')}</p>
                    <p className="text-lg font-semibold text-gray-800">
                      {weatherData.temperature ? Math.round(weatherData.temperature) : 'N/A'}°C
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg">
                  <Droplets className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-600">💧 {t('humidity')}</p>
                    <p className="text-lg font-semibold text-gray-800">
                      {weatherData.humidity !== undefined && weatherData.humidity !== null ? weatherData.humidity : 'N/A'}%
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg">
                  <Cloud className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-600">🌤️ {t('condition')}</p>
                    <p className="text-lg font-semibold text-gray-800 capitalize">
                      {weatherData.description || 'Clear sky'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg">
                  <Wind className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="text-sm text-gray-600">💨 {t('wind')}</p>
                    <p className="text-lg font-semibold text-gray-800">
                      {weatherData.wind_speed ? `${weatherData.wind_speed} m/s` : 'N/A'}
                    </p>
                  </div>
                </div>
              </div>
              
              {weatherData.rainfall && weatherData.rainfall > 0 ? (
                <div className="mt-3 p-3 bg-blue-100 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Droplets className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-blue-800">
                      {t('rainfall')}: {weatherData.rainfall}mm ({t('lastHour')})
                    </span>
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Prediction Form */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-primary" />
            {t('fertilizerPrediction')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={submit} className="space-y-6">
            {/* Environmental Parameters */}
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Thermometer className="h-4 w-4 text-blue-500" />
                {t('weatherData')}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="temperature">{t('temperature')}</Label>
                  <Input
                    id="temperature"
                    type="number"
                    value={form.Temparature}
                    onChange={(e) => update('Temparature', Number(e.target.value))}
                    placeholder="25"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="humidity">{t('humidity')}</Label>
                  <Input
                    id="humidity"
                    type="number"
                    value={form.Humidity}
                    onChange={(e) => update('Humidity', Number(e.target.value))}
                    placeholder="60"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="moisture">{t('moisture')}</Label>
                  <Input
                    id="moisture"
                    type="number"
                    value={form.Moisture}
                    onChange={(e) => update('Moisture', Number(e.target.value))}
                    placeholder="40"
                  />
                </div>
              </div>
            </div>

            {/* Soil & Crop Parameters */}
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Leaf className="h-4 w-4 text-green-500" />
                Soil & Crop Parameters
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="soilType">{t('soilType')}</Label>
                  <Select value={form.Soil_Type} onValueChange={(value) => update('Soil_Type', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select soil type" />
                    </SelectTrigger>
                    <SelectContent>
                      {soilTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cropType">{t('cropType')}</Label>
                  <Select value={form.Crop_Type} onValueChange={(value) => update('Crop_Type', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select crop type" />
                    </SelectTrigger>
                    <SelectContent>
                      {cropTypes.map((crop) => (
                        <SelectItem key={crop} value={crop}>{crop}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Nutrient Parameters */}
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Zap className="h-4 w-4 text-purple-500" />
                Nutrient Parameters (ppm)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nitrogen">{t('nitrogen')}</Label>
                  <Input
                    id="nitrogen"
                    type="number"
                    value={form.Nitrogen}
                    onChange={(e) => update('Nitrogen', Number(e.target.value))}
                    placeholder="20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="potassium">{t('potassium')}</Label>
                  <Input
                    id="potassium"
                    type="number"
                    value={form.Potassium}
                    onChange={(e) => update('Potassium', Number(e.target.value))}
                    placeholder="20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phosphorus">{t('phosphorus')}</Label>
                  <Input
                    id="phosphorus"
                    type="number"
                    value={form.Phosphorous}
                    onChange={(e) => update('Phosphorous', Number(e.target.value))}
                    placeholder="20"
                  />
                </div>
              </div>
            </div>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <Button 
              type="submit" 
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90"
              size="lg"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  {t('predicting')}
                </>
              ) : (
                <>
                  <Zap className="h-4 w-4 mr-2" />
                  {t('getRecommendation')}
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
