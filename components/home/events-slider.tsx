'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { events } from '@/data/events'
import Image from 'next/image'



export function EventsSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true)
  const autoPlayRef = React.useRef<NodeJS.Timeout>()

  const startAutoPlay = React.useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === events.length - 1 ? 0 : prevIndex + 1))
    }, 5000) // Change slide every 5 seconds
  }, [])

  React.useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay()
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, startAutoPlay])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? events.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex === events.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${currentIndex}`}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div 
            className="w-full h-full bg-cover bg-center blur-sm scale-105"
            style={{ backgroundImage: `url(${events[currentIndex].backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto h-full flex items-center px-4">
        {/* Navigation Buttons - Now outside the card */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute -left-20 top-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-transparent hover:bg-white/20 transition-all duration-300 backdrop-blur-sm group"
          onClick={handlePrevious}
        >
          <ChevronLeft className="h-10 w-10 text-white transition-colors" />
          <span className="sr-only">Previous event</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-20 top-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-transparent hover:bg-white/20 transition-all duration-300 backdrop-blur-sm group"
          onClick={handleNext}
        >
          <ChevronRight className="h-10 w-10 text-white transition-colors" />
          <span className="sr-only">Next event</span>
        </Button>

        {/* Event Content */}
        <Card className="w-[90%] mx-auto bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden border-0">
          <CardContent className="p-8">
            <AnimatePresence mode="wait">
            <div key={currentIndex} className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[450px]">

                {/* Text Content */}
                <div className="flex flex-col justify-center space-y-6 h-full overflow-hidden">
                  <motion.span
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-sm tracking-wider text-blue-600 font-semibold"
                  >
                    {events[currentIndex].tag}
                  </motion.span>
                  
                  <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-4xl font-bold tracking-tight text-gray-900"
                  >
                    {events[currentIndex].title}
                  </motion.h2>
                  
                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-gray-600 leading-relaxed overflow-y-auto hidden md:block max-h-[200px] pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
                  >
                    {events[currentIndex].description}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-600/50"
                    >
                      Find out more
                    </Button>
                  </motion.div>
                </div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="relative h-full overflow-hidden rounded-xl shadow-lg"
                >
                  <Image
                    src={events[currentIndex].image}
                    alt={events[currentIndex].title}
                    fill
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
              </div>
            </AnimatePresence>

            {/* Dots Navigation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex justify-center gap-3 mt-8"
            >
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`h-3 transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-blue-600 rounded-full' 
                      : 'w-3 bg-gray-300 hover:bg-gray-400 rounded-full hover:scale-110'
                  }`}
                >
                  <span className="sr-only">Go to slide {index + 1}</span>
                </button>
              ))}
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

