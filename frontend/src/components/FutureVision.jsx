import React from 'react'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Globe, Brain, ShoppingCart, Smartphone, Leaf, Zap } from 'lucide-react'

export default function FutureVision() {
  const { t } = useTranslation()

  const features = [
    {
      title: 'Multilingual Support',
      description: 'Full support for Hindi, Marathi, Telugu, and more regional languages to serve farmers across India.',
      icon: Globe,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      status: 'Available Now'
    },
    {
      title: 'AI-Powered Disease Detection',
      description: 'Advanced computer vision to identify crop diseases and pests from smartphone photos.',
      icon: Brain,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      status: 'Coming Soon'
    },
    {
      title: 'Marketplace Integration',
      description: 'Connect directly with fertilizer suppliers and get the best prices for recommended products.',
      icon: ShoppingCart,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      status: 'In Development'
    },
    {
      title: 'Mobile App',
      description: 'Native mobile application for Android and iOS with offline capabilities and GPS integration.',
      icon: Smartphone,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      status: 'Planned'
    },
    {
      title: 'Organic Farming Focus',
      description: 'Specialized recommendations for organic farming practices and sustainable agriculture.',
      icon: Leaf,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50',
      status: 'In Development'
    },
    {
      title: 'Real-time Alerts',
      description: 'Weather-based alerts and notifications for optimal farming decisions and crop protection.',
      icon: Zap,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
      status: 'Coming Soon'
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Available Now': return 'bg-green-100 text-green-800'
      case 'Coming Soon': return 'bg-blue-100 text-blue-800'
      case 'In Development': return 'bg-yellow-100 text-yellow-800'
      case 'Planned': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-dark mb-4">What's Next?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're constantly innovating to bring you the most advanced agricultural technology solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={index} className={`${feature.bgColor} border-0 shadow-sm hover:shadow-md transition-shadow`}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg ${feature.bgColor} flex items-center justify-center`}>
                        <IconComponent className={`h-5 w-5 ${feature.color}`} />
                      </div>
                      <CardTitle className="text-lg text-gray-800">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(feature.status)}`}>
                      {feature.status}
                    </span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-primary to-green-600 text-white border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Be Part of the Future</h3>
              <p className="text-lg mb-6 opacity-90">
                Join thousands of farmers already using Krushak to revolutionize their agricultural practices
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  Start Predicting Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
