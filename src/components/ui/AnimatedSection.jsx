import React from 'react'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const AnimatedSection = ({ 
  children, 
  animation = 'fade-up', 
  delay = 0, 
  className = '' 
}) => {
  const [isVisible, setElementRef] = useScrollAnimation(0.1)

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-1000 ease-out'
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return `${baseClasses} opacity-0 translate-y-8`
        case 'fade-in':
          return `${baseClasses} opacity-0`
        case 'fade-left':
          return `${baseClasses} opacity-0 translate-x-8`
        case 'fade-right':
          return `${baseClasses} opacity-0 -translate-x-8`
        case 'scale':
          return `${baseClasses} opacity-0 scale-95`
        default:
          return `${baseClasses} opacity-0 translate-y-8`
      }
    }
    
    return `${baseClasses} opacity-100 translate-x-0 translate-y-0 scale-100`
  }

  return (
    <div
      ref={setElementRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  )
}

export default AnimatedSection