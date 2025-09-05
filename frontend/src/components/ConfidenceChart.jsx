import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { TrendingUp } from 'lucide-react'

export default function ConfidenceChart({ results }) {
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
          <TrendingUp className="h-5 w-5 text-primary" />
          Model Confidence Comparison
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="model" 
                tick={{ fontSize: 12 }}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis 
                domain={[0, 100]} 
                tickFormatter={(v) => `${v}%`}
                tick={{ fontSize: 12 }}
              />
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Confidence']}
                labelStyle={{ color: '#374151' }}
              />
              <Bar 
                dataKey="confidence" 
                fill="#16a34a"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
