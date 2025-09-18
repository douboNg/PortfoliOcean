import React from 'react'

const LoadingSpinner = ({ size = 'md', color = 'ocean' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }

  const colorClasses = {
    ocean: 'border-ocean-500',
    coral: 'border-beach-coral',
    white: 'border-white'
  }

  return (
    <div className={`${sizeClasses[size]} border-2 ${colorClasses[color]} border-t-transparent rounded-full animate-spin`}></div>
  )
}

export default LoadingSpinner