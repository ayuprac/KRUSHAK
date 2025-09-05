import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const initial = {
  Temparature: 25,
  Humidity: 60,
  Moisture: 40,
  Soil_Type: 'Loamy',
  Crop_Type: 'Wheat',
  Nitrogen: 20,
  Potassium: 20,
  Phosphorous: 20,
}

export default function PredictionForm({ onResult, weatherData }) {
  const { t, i18n } = useTranslation()
  const [form, setForm] = useState(initial)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Auto-fill form with weather data when available
  useEffect(() => {
    if (weatherData) {
      setForm(prev => ({
        ...prev,
        Temparature: weatherData.temperature || prev.Temparature,
        Humidity: weatherData.humidity || prev.Humidity,
        Moisture: weatherData.rainfall ? Math.min(weatherData.rainfall * 2, 80) : prev.Moisture
      }))
    }
  }, [weatherData])

  const update = (k, v) => setForm(prev => ({ ...prev, [k]: v }))

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

  const input = (id, label, type = 'number') => (
    <div className="flex flex-col">
      <label className="text-sm mb-1">{label}</label>
      <input
        type={type}
        value={form[id]}
        onChange={e => update(id, type === 'number' ? Number(e.target.value) : e.target.value)}
        className="border rounded p-2"
      />
    </div>
  )

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {input('Temparature', t('temperature'))}
        {input('Humidity', t('humidity'))}
        {input('Moisture', t('moisture'))}
        <div className="flex flex-col">
          <label className="text-sm mb-1">{t('soilType')}</label>
          <select className="border rounded p-2" value={form.Soil_Type} onChange={e => update('Soil_Type', e.target.value)}>
            {['Loamy','Clayey','Sandy','Red','Black'].map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-sm mb-1">{t('cropType')}</label>
          <select className="border rounded p-2" value={form.Crop_Type} onChange={e => update('Crop_Type', e.target.value)}>
            {['Wheat','Paddy','Pulses','Sugarcane','Maize','Cotton','Barley','Tobacco','Ground Nuts','Millets','coffee','pomegranate','rice','watermelon','kidneybeans','orange','Oil seeds'].map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        {input('Nitrogen', t('nitrogen'))}
        {input('Potassium', t('potassium'))}
        {input('Phosphorous', t('phosphorus'))}
      </div>
      {error && <div className="text-red-600 text-sm">{error}</div>}
      <button disabled={loading} className="bg-primary text-white px-4 py-2 rounded">
        {loading ? t('predicting') : t('getRecommendation')}
      </button>
    </form>
  )
}


