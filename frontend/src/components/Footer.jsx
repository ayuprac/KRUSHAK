import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="mt-8 bg-white border-t">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h4 className="font-semibold text-primary-dark">{t('contactUs')}</h4>
          <div className="text-sm flex items-center gap-2"><FaEnvelope /> support@krushak.app</div>
          <div className="text-sm flex items-center gap-2"><FaPhone /> +91 99999 99999</div>
        </div>
        <div className="flex items-center gap-4 text-primary-dark">
          <FaFacebook />
          <FaTwitter />
          <FaGithub />
        </div>
        <Link to="/prediction" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors">{t('getRecommendations')}</Link>
      </div>
    </footer>
  )
}


