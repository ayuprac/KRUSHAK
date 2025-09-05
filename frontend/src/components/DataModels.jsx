import React from 'react'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Brain, Target, Database, TrendingUp } from 'lucide-react'

export default function DataModels() {
  const { t } = useTranslation()

  const modelData = [
    { name: 'Decision Tree', accuracy: 87 },
    { name: 'Random Forest', accuracy: 92 },
    { name: 'Logistic Regression', accuracy: 84 },
    { name: 'SVM', accuracy: 89 },
    { name: 'Naive Bayes', accuracy: 81 }
  ]

  const stats = [
    {
      title: 'Models Used',
      value: '5',
      description: 'Advanced ML Algorithms',
      icon: Brain,
      color: 'text-blue-500'
    },
    {
      title: 'Best Accuracy',
      value: '92%',
      description: 'Random Forest Model',
      icon: Target,
      color: 'text-green-500'
    },
    {
      title: 'Data Points',
      value: '10K+',
      description: 'Training Samples',
      icon: Database,
      color: 'text-purple-500'
    },
    {
      title: 'Success Rate',
      value: '94%',
      description: 'Farmer Satisfaction',
      icon: TrendingUp,
      color: 'text-orange-500'
    }
  ]

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-dark mb-4">Data & Models</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powered by advanced machine learning algorithms trained on extensive agricultural data
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Model Accuracy Chart */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                Model Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={modelData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="name" 
                      tick={{ fontSize: 12 }}
                      angle={-45}
                      textAnchor="end"
                      height={60}
                    />
                    <YAxis 
                      domain={[70, 100]}
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'Accuracy']}
                      labelStyle={{ color: '#374151' }}
                    />
                    <Bar 
                      dataKey="accuracy" 
                      fill="#16a34a"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Model Information */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                Model Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {modelData.map((model, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-800">{model.name}</h4>
                      <p className="text-sm text-gray-600">Machine Learning Algorithm</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">{model.accuracy}%</div>
                      <div className="text-xs text-gray-500">Accuracy</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index} className="text-center shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-3">
                    <div className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center`}>
                      <IconComponent className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                      <div className="text-sm font-semibold text-gray-600">{stat.title}</div>
                      <div className="text-xs text-gray-500 mt-1">{stat.description}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
