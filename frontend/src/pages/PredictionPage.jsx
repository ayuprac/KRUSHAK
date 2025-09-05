import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import EnhancedPredictionForm from '../components/EnhancedPredictionForm.jsx'
import PredictionResult from '../components/PredictionResult.jsx'
import ConfidenceChart from '../components/ConfidenceChart.jsx'
import SoilHealthInsights from '../components/SoilHealthInsights.jsx'
import ReportDownload from '../components/ReportDownload.jsx'
import { ArrowLeft, Leaf, Brain, FileText } from 'lucide-react'
import { Button } from '../components/ui/button'

export default function PredictionPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [results, setResults] = useState(null)
  const [soilHealth, setSoilHealth] = useState(null)
  const [inputData, setInputData] = useState(null)
  const [weatherData, setWeatherData] = useState(null)

  const handleResult = (predictions, health, inputs, weather) => {
    setResults(predictions)
    setSoilHealth(health)
    setInputData(inputs)
    setWeatherData(weather)
  }

  const handleBack = () => {
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="outline" 
            onClick={handleBack}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary-dark mb-2 flex items-center justify-center gap-3">
              <Leaf className="h-8 w-8" />
              {t('fertilizerPrediction')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get AI-powered fertilizer recommendations based on your soil conditions and weather data
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <EnhancedPredictionForm 
            onResult={handleResult} 
            weatherData={weatherData}
            onWeatherData={setWeatherData}
          />
          
          {results && (
            <div className="space-y-6">
              {/* Results Header */}
              <Card className="bg-gradient-to-r from-primary to-green-600 text-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
                      <Brain className="h-6 w-6" />
                      Analysis Complete!
                    </h2>
                    <p className="opacity-90">
                      Your soil analysis and fertilizer recommendations are ready
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Results Grid */}
              <div className="space-y-6">
                {/* First Row: Prediction Results and Confidence Chart */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <PredictionResult results={results} />
                  <ConfidenceChart results={results} />
                </div>
                
                {/* Second Row: Soil Health Analysis - Full Width */}
                <SoilHealthInsights soilHealth={soilHealth} />
              </div>

              {/* Report Download */}
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Download Detailed Report
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ReportDownload 
                    inputData={inputData}
                    predictions={results}
                    soilHealth={soilHealth}
                    weatherData={weatherData}
                  />
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


