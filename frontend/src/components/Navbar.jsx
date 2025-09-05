import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { Leaf } from 'lucide-react'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const location = useLocation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  const link = (path, label) => (
    <Link
      to={path}
      className={`px-3 py-2 rounded-md text-sm font-medium ${
        location.pathname === path 
          ? 'bg-primary text-white' 
          : 'text-primary-dark hover:bg-primary-light'
      }`}
    >
      {label}
    </Link>
  )

  return (
    <nav className="bg-white/80 backdrop-blur border-b border-green-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link 
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-primary-dark hover:text-primary transition-colors"
        >
          <Leaf className="h-6 w-6 text-primary" />
          Krushak
        </Link>
        <div className="flex items-center space-x-4">
          <div className="space-x-2">
            {link('/', t('home'))}
            {link('/prediction', t('prediction'))}
            {link('/health', t('cropHealth'))}
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Language:</span>
            <select 
              value={i18n.language} 
              onChange={(e) => changeLanguage(e.target.value)}
              className="px-2 py-1 border rounded text-sm"
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
              <option value="mr">मराठी</option>
              <option value="te">తెలుగు</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  )
}


