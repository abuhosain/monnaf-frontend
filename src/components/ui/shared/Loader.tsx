"use client"

import { useState, useEffect } from "react"

interface LoaderProps {
  onLoadingComplete?: () => void
}

const Loader = ({ onLoadingComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          // Start fade out after a short delay
          setTimeout(() => {
            setIsVisible(false)
            onLoadingComplete?.()
          }, 500)
          return 100
        }
        return prev + Math.random() * 15 + 5 // Random increment between 5-20
      })
    }, 150)

    return () => clearInterval(interval)
  }, [onLoadingComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-[20%] left-[10%] w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-radial from-green-400/10 to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-[20%] right-[10%] w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-gradient-radial from-yellow-400/10 to-transparent rounded-full blur-3xl animate-float-reverse" />
      <div className="absolute top-[50%] right-[20%] w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-gradient-radial from-purple-600/8 to-transparent rounded-full blur-2xl animate-float-slow" />

      {/* Main Loader Content */}
      <div className="relative z-10 text-center px-4 sm:px-6">
        {/* Logo/Brand Area */}
        <div className="mb-8 sm:mb-12">
          <div className="relative">
            {/* Main Circle */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto rounded-full bg-gradient-to-br from-green-400 via-yellow-400 to-purple-600 flex items-center justify-center relative animate-pulse">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-black flex items-center justify-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-green-400 to-yellow-400 animate-spin-slow" />
              </div>

              {/* Rotating Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-green-400/30 border-t-green-400 animate-spin" />
              <div className="absolute -inset-2 rounded-full border border-yellow-400/20 border-r-yellow-400 animate-spin-reverse" />
              <div className="absolute -inset-4 rounded-full border border-purple-600/20 border-b-purple-600 animate-spin-slow" />
            </div>

            {/* Floating Particles */}
            <div className="absolute -top-4 -left-4 w-3 h-3 bg-green-400 rounded-full animate-bounce" />
            <div className="absolute -top-2 -right-6 w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-300" />
            <div className="absolute -bottom-4 -right-2 w-4 h-4 bg-purple-600 rounded-full animate-bounce delay-500" />
            <div className="absolute -bottom-2 -left-6 w-2 h-2 bg-green-400 rounded-full animate-bounce delay-700" />
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-400 via-yellow-400 to-purple-600 bg-clip-text text-transparent mb-2 sm:mb-4 animate-pulse">
            Welcome
          </h1>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg animate-fade-in-up">
            Preparing your experience...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto mb-6 sm:mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs sm:text-sm text-gray-500">Loading</span>
            <span className="text-xs sm:text-sm text-green-400 font-semibold">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-1.5 sm:h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-green-400 to-yellow-400 h-full rounded-full relative transition-all duration-300 ease-out shadow-lg shadow-green-400/50"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 sm:space-x-3">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-bounce" />
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full animate-bounce delay-150" />
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-600 rounded-full animate-bounce delay-300" />
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 8s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 2s linear infinite; }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
      `}</style>
    </div>
  )
}

export default Loader
