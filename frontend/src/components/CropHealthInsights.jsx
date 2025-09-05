import React from 'react'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Progress } from './ui/progress'
import { AlertTriangle, CheckCircle, Info, Droplets } from 'lucide-react'

export default function CropHealthInsights() {
  const { t } = useTranslation()

  const insights = [
    {
      title: 'Soil Nitrogen',
      value: 15,
      status: 'low',
      recommendation: 'Add compost',
      icon: AlertTriangle,
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      progressColor: 'bg-red-500'
    },
    {
      title: 'pH Level',
      value: 6.2,
      status: 'slightly_acidic',
      recommendation: 'Use lime',
      icon: Info,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
      progressColor: 'bg-yellow-500'
    },
    {
      title: 'Moisture',
      value: 65,
      status: 'adequate',
      recommendation: 'Good for most crops',
      icon: CheckCircle,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      progressColor: 'bg-green-500'
    }
  ]

  const getStatusText = (status) => {
    switch (status) {
      case 'low': return 'Low'
      case 'slightly_acidic': return 'Slightly Acidic'
      case 'adequate': return 'Adequate'
      default: return status
    }
  }

  const getProgressValue = (item) => {
    if (item.title === 'Soil Nitrogen') {
      return (item.value / 50) * 100 // Assuming 50 is optimal
    } else if (item.title === 'pH Level') {
      return ((item.value - 4) / 6) * 100 // pH scale 4-10
    } else if (item.title === 'Moisture') {
      return item.value
    }
    return 50
  }

  return (
    <section className="py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-primary-dark mb-2">Crop Health Insights</h2>
        <p className="text-gray-600">Example soil analysis from our system</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {insights.map((insight, index) => {
          const IconComponent = insight.icon
          return (
            <Card key={index} className={`${insight.bgColor} border-0 shadow-sm`}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <IconComponent className={`h-5 w-5 ${insight.color}`} />
                  {insight.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-800">
                      {insight.title === 'pH Level' ? insight.value : `${insight.value}${insight.title === 'Moisture' ? '%' : ' ppm'}`}
                    </span>
                    <span className={`text-sm font-medium px-2 py-1 rounded-full ${insight.bgColor} ${insight.color}`}>
                      {getStatusText(insight.status)}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Level</span>
                      <span>{Math.round(getProgressValue(insight))}%</span>
                    </div>
                    <Progress 
                      value={getProgressValue(insight)} 
                      className="h-2"
                    />
                  </div>
                  
                  <div className="pt-2">
                    <p className="text-sm text-gray-600">
                      <strong>Recommendation:</strong> {insight.recommendation}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
