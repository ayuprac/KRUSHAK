import React from 'react'

export default function ReviewCard({ name, text }) {
  return (
    <div className="p-4 border rounded bg-white shadow-sm">
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center font-bold text-primary-dark mr-3">
          {name?.[0] || 'U'}
        </div>
        <div className="font-medium">{name}</div>
      </div>
      <p className="text-sm text-gray-700">{text}</p>
    </div>
  )
}


