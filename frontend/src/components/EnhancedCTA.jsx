import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Play, Download, FileText, ArrowRight } from 'lucide-react'

export default function EnhancedCTA() {
  const { t } = useTranslation()

  const handleDownloadSample = () => {
    // Create a sample report download link
    const link = document.createElement('a')
    link.href = '/sample-report.pdf' // This would be a sample PDF in the public folder
    link.download = 'krushak-sample-report.pdf'
    link.click()
  }

  return (
    <section className="py-12 bg-gradient-to-br from-primary/5 to-green-100/50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary-dark mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600">
            Choose how you'd like to experience Krushak's powerful fertilizer recommendation system
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Start Predicting */}
          <Card className="text-center shadow-sm hover:shadow-md transition-shadow border-primary/20">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Start Predicting</h3>
              <p className="text-gray-600 text-sm mb-4">
                Enter your soil data and get instant fertilizer recommendations
              </p>
              <Link to="/prediction">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  size="lg"
                >
                  {t('startPredicting')}
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* View Demo */}
          <Card className="text-center shadow-sm hover:shadow-md transition-shadow border-blue-200">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">View Demo</h3>
              <p className="text-gray-600 text-sm mb-4">
                See how Krushak works with sample data and explore all features
              </p>
              <Link to="/demo">
                <Button 
                  variant="outline"
                  className="w-full border-blue-500 text-blue-500 hover:bg-blue-50"
                  size="lg"
                >
                  <Play className="h-4 w-4 mr-2" />
                  View Demo
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Download Sample Report */}
          <Card className="text-center shadow-sm hover:shadow-md transition-shadow border-green-200">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sample Report</h3>
              <p className="text-gray-600 text-sm mb-4">
                Download a sample PDF report to see the detailed analysis format
              </p>
              <Button 
                onClick={handleDownloadSample}
                variant="outline"
                className="w-full border-green-500 text-green-500 hover:bg-green-50"
                size="lg"
              >
                <FileText className="h-4 w-4 mr-2" />
                Download Sample
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            All features are free to use • No registration required • Instant results
          </p>
        </div>
      </div>
    </section>
  )
}
