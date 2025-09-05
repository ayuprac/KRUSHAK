import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

export default function TestimonialsCarousel() {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Ravi Patil',
      location: 'Pune, Maharashtra',
      text: t('review1'),
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      crop: 'Wheat Farmer'
    },
    {
      name: 'Meera Desai',
      location: 'Ahmedabad, Gujarat',
      text: t('review2'),
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      crop: 'Cotton Farmer'
    },
    {
      name: 'Ajay Kumar',
      location: 'Hyderabad, Telangana',
      text: t('review3'),
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      crop: 'Rice Farmer'
    },
    {
      name: 'Priya Sharma',
      location: 'Jaipur, Rajasthan',
      text: 'Krushak helped me optimize my fertilizer usage and increased my yield by 25%. The recommendations are spot-on!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      crop: 'Sugarcane Farmer'
    },
    {
      name: 'Suresh Reddy',
      location: 'Bangalore, Karnataka',
      text: 'The soil health analysis feature is amazing. It helped me understand my soil better and make informed decisions.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      crop: 'Coffee Farmer'
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-dark mb-4">{t('whatFarmersSay')}</h2>
          <p className="text-lg text-gray-600">
            Hear from farmers who have transformed their agricultural practices with Krushak
          </p>
        </div>

        <div className="relative">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="text-center">
                {/* Farmer Image */}
                <div className="mb-6">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                  />
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg text-gray-700 mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Farmer Info */}
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-gray-800">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-primary font-medium">
                    {testimonials[currentIndex].crop}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
