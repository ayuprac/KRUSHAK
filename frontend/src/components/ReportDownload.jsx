import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaDownload, FaFilePdf, FaFileExcel } from 'react-icons/fa'

export default function ReportDownload({ inputData, predictions, soilHealth, weatherData }) {
  const { t, i18n } = useTranslation()
  const [downloading, setDownloading] = useState('')

  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'

  const downloadReport = async (format) => {
    if (!predictions || Object.keys(predictions).length === 0) {
      alert('No prediction data available for download')
      return
    }

    setDownloading(format)
    
    try {
      const response = await fetch(`${apiUrl}/api/download-report/${format}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          input_data: inputData,
          predictions: predictions,
          soil_health: soilHealth,
          weather_data: weatherData,
          language: i18n.language
        })
      })

      if (!response.ok) {
        throw new Error('Failed to generate report')
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `krushak_report.${format === 'pdf' ? 'pdf' : 'xlsx'}`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error('Download error:', error)
      alert('Failed to download report. Please try again.')
    } finally {
      setDownloading('')
    }
  }

  return (
    <div className="mt-6 p-4 border rounded-lg bg-white shadow-sm">
      <h3 className="text-lg font-semibold mb-3 text-primary-dark">{t('downloadReport')}</h3>
      
      <div className="flex gap-3">
        <button
          onClick={() => downloadReport('pdf')}
          disabled={downloading === 'pdf' || !predictions}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaFilePdf />
          {downloading === 'pdf' ? 'Generating...' : t('downloadPDF')}
        </button>
        
        <button
          onClick={() => downloadReport('excel')}
          disabled={downloading === 'excel' || !predictions}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaFileExcel />
          {downloading === 'excel' ? 'Generating...' : t('downloadExcel')}
        </button>
      </div>
      
      <div className="mt-3 text-sm text-gray-600">
        <p>Reports include:</p>
        <ul className="list-disc list-inside mt-1 space-y-1">
          <li>Input parameters and weather data</li>
          <li>Predictions from all ML models</li>
          <li>Model confidence comparison chart</li>
          <li>Soil health analysis and recommendations</li>
        </ul>
      </div>
    </div>
  )
}
