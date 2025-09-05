import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import HomePage from './pages/HomePage.jsx'
import PredictionPage from './pages/PredictionPage.jsx'
import CropHealthPage from './pages/CropHealthPage.jsx'
import DemoPage from './pages/DemoPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/prediction" element={<PredictionPage />} />
            <Route path="/health" element={<CropHealthPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}


