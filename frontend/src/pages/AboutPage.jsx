import React from 'react'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { ArrowLeft, Leaf, Brain, Users, Target, Zap } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function AboutPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="outline" onClick={handleBack} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('backToHome')}
          </Button>
          <h1 className="text-4xl font-bold text-primary-dark mb-2 flex items-center gap-3">
            <Leaf className="h-8 w-8" />
            {t('aboutKrushak')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('empoweringFarmers')}
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-6 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              {t('ourMission')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              {t('missionText')}
            </p>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                {t('aiPoweredAnalysis')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                {t('aiAnalysisText')}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                {t('farmerCentricDesign')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                {t('farmerCentricText')}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                {t('realTimeInsights')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                {t('realTimeText')}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-primary" />
                {t('sustainableAgriculture')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                {t('sustainableText')}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Technology Section */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>{t('technologyStack')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">{t('machineLearning')}</h3>
                <p className="text-sm text-gray-600">
                  {t('machineLearningText')}
                </p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">{t('dataSources')}</h3>
                <p className="text-sm text-gray-600">
                  {t('dataSourcesText')}
                </p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">{t('languages')}</h3>
                <p className="text-sm text-gray-600">
                  {t('languagesText')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
