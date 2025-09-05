import React from 'react'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Brain, Target } from 'lucide-react'

export default function PredictionResult({ results }) {
  const { t } = useTranslation()
  if (!results) return null
  const models = Object.keys(results)

  // Build chart data: one bar per model showing top class probability
  const chartData = models.map(name => {
    const r = results[name]
    let topProb = 1
    if (r.probabilities && Object.keys(r.probabilities).length > 0) {
      topProb = Math.max(...Object.values(r.probabilities))
    }
    return { model: name, confidence: Math.round(topProb * 100) }
  })

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          All Model Predictions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {models.map(name => {
            const confidence = chartData.find(d => d.model === name)?.confidence || 0
            return (
              <div key={name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{name}</h4>
                    <p className="text-sm text-gray-600">Machine Learning Model</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-primary">
                    {results[name].prediction}
                  </p>
                  <p className="text-sm text-gray-500">{confidence}% confidence</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}


