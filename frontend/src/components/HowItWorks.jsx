import React from 'react'
import { useTranslation } from 'react-i18next'
import { Card, CardContent } from './ui/card'
import { Edit, Brain, CheckCircle, ArrowRight } from 'lucide-react'

export default function HowItWorks() {
  const { t } = useTranslation()

  const steps = [
    {
      number: 1,
      title: t('enterSoilValues'),
      description: t('enterSoilValuesDesc'),
      icon: Edit,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      number: 2,
      title: t('mlModelsAnalyze'),
      description: t('mlModelsAnalyzeDesc'),
      icon: Brain,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      number: 3,
      title: t('getRecommendations'),
      description: t('getRecommendationsDesc'),
      icon: CheckCircle,
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    }
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-dark mb-4">{t('howKrushakWorks')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('howKrushakWorksDesc')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="relative">
                <Card className={`${step.bgColor} border-0 shadow-sm h-full`}>
                  <CardContent className="p-6 text-center">
                    <div className="flex flex-col items-center space-y-4">
                      <div className={`w-16 h-16 rounded-full ${step.bgColor} flex items-center justify-center border-4 border-white shadow-lg`}>
                        <IconComponent className={`h-8 w-8 ${step.color}`} />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-gray-500">STEP {step.number}</div>
                        <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
