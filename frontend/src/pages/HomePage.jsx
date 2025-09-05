import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import WeatherWidget from '../components/WeatherWidget'
import CropHealthInsights from '../components/CropHealthInsights'
import HowItWorks from '../components/HowItWorks'
import DataModels from '../components/DataModels'
import TestimonialsCarousel from '../components/TestimonialsCarousel'
import FutureVision from '../components/FutureVision'
import EnhancedCTA from '../components/EnhancedCTA'
import { ArrowRight, CheckCircle, Zap, Database } from 'lucide-react'

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-br from-primary/5 to-green-100/30">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-dark mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/prediction">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-3"
              >
                {t('startPredicting')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-3"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Weather Widget */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <WeatherWidget />
            </div>
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardContent className="p-8 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary-dark mb-4">
                      Real-time Agricultural Intelligence
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Get weather data and soil insights to make informed farming decisions. 
                      Our system combines current conditions with historical data for accurate recommendations.
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">5+</div>
                        <div className="text-sm text-gray-600">ML Models</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">92%</div>
                        <div className="text-sm text-gray-600">Accuracy</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">10K+</div>
                        <div className="text-sm text-gray-600">Data Points</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Crop Health Insights */}
      <CropHealthInsights />

      {/* Why Krushak Section - Enhanced */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">{t('whyKrushak')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover why thousands of farmers trust Krushak for their agricultural decisions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{t('accurateRecommendations')}</h3>
                <p className="text-gray-600">{t('accurateDesc')}</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{t('easyToUse')}</h3>
                <p className="text-gray-600">{t('easyDesc')}</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Database className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{t('basedOnData')}</h3>
                <p className="text-gray-600">{t('dataDesc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <div data-section="how-it-works">
        <HowItWorks />
      </div>

      {/* Data & Models */}
      <DataModels />

      {/* Enhanced Testimonials */}
      <TestimonialsCarousel />

      {/* Future Vision */}
      <FutureVision />

      {/* Enhanced Call to Action */}
      <EnhancedCTA />
    </div>
  )
}


