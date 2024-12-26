'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const events = [
  {
    id: 1,
    title: 'SATURDAY CLUBS',
    description: 'The Saturday Club, held twice a semester, offers diverse activities like mock interviews, group discussions, and project presentations to prepare students for the latest interview trends. Esteemed alumni guide students, helping build industrial connections. Core and HR mock interviews were conducted for various branches. Participants received valuable feedback and networking opportunities. Pre-placement talks provided insights into company processes.',
    image: '/events-slider/saturday_club/sat_club.JPG?height=400&width=600',
    backgroundImage: '/events-slider/saturday_club/sat_club_bg.jpg?height=800&width=1200',
    link: '#',
  },
  {
    id: 2,
    title: 'SMS GROUP PLACEMENT DRIVE',
    description: 'I2IC organizes placement drives to connect students with top companies, offering opportunities to launch their careers. The SMS Group Placement Drive highlighted this initiative, where students participated in rigorous selection processes. With pre-placement talks and technical assessments, the drive gave students a comprehensive exposure to industry requirements. Recruiters shared valuable insights into career growth and expectations. These drives bridge the gap between academia and industry, fostering professional growth.',
    image: '/events-slider/SMS-GROUP-PLACEMENT-DRIVE/pd.jpeg?height=400&width=600',
    backgroundImage: '/events-slider/SMS-GROUP-PLACEMENT-DRIVE/pd-bg.jpeg?height=800&width=1200',
    link: '#',
  },
  {
    id: 3,
    title: 'ALUMNI MEETINGS',
    description: 'Alumni meetings at I2IC serve as a platform for students to connect with successful alumni across various fields. Held multiple times each semester, these sessions provide guidance on industry trends, career development, and building professional networks. Esteemed alumni share their experiences, offering practical insights to bridge the academic-industry gap. The interactive format encourages students to seek advice and establish meaningful connections. These meetings foster mentorship and inspire students to excel in their professional journeys.',
    image: '/events-slider/alumni_meetings/alumni-meet.JPG?height=400&width=600',
    backgroundImage: '/events-slider/alumni_meetings/alumni-meet.JPG?height=800&width=1200',
    link: '#',
  },
  {
    id: 4,
    title: 'LTI MINDTREE VISIT',
    tag: 'INDUSTRY VISIT',
    description: 'In the Industry visit of 30th November 2023, Mr. Kaustubh Anush Anwekar conducted an insightful session on Generative AI for TY and final-year students at I2IC. The session covered the uses and applications of Generative AI, along with topics like RNN and deep learning. Students showcased their AI and ML projects to the guest at the end. This interactive session offered valuable insights into advanced AI concepts and practical applications.',
    image: '/events-slider/LTI-MINDTREE/LTI.jpeg?height=400&width=600',
    backgroundImage: '/events-slider/LTI-MINDTREE/ltimindtree.jpeg?height=800&width=1200',
    link: '#',
  },
  {
    id: 5,
    title: 'RESUME BUILDING SESSIONS',
    description: 'On 28th October 2023, I2IC hosted a resume-building session led by Mr. Vivek Choudhary, a graduate from VESIT Mumbai and holds an MBA from IIM Trichy. With over five years of corporate experience at companies like Accenture, ICICI Prudential, LIC, and Bajaj Allianz. Over 150 final-year students attended the offline session organized by VIITs TPO. Mr. Solanki shared key insights into crafting professional resumes, dos and donts, and practical examples. The session emphasized the importance of a well-structured resume in placements and included guidance on online and offline resume creation. Students left equipped to build impactful resumes, making the event a resounding success.',
    image: '/events-slider/resume_building _sessions/res_build.jpg?height=400&width=600',
    backgroundImage: '/events-slider/resume_building _sessions/res_buil_bg.jpg?height=800&width=1200',
    link: '#',
  },
  {
    id: 6,
    title: 'AI-ML WORKSHOPS',
    description: 'The I2IC Council, in collaboration with NXTWAVE, conducted a workshop focused on generative AI and its applications. The session covered Artificial Narrow Intelligence, Artificial General Intelligence, prompt engineering, and the development of a generative AI model. Core concepts of AI, ML, and DL were explored, alongside analytical and generative AI. The workshop also highlighted real-time AI applications and their limitations, providing students with practical insights into AI development.',
    image: '/events-slider/aiml-workshop/aiml-workshop.JPG?height=400&width=600',
    backgroundImage: '/events-slider/aiml-workshop/aiml-workshop-bg.JPG?height=800&width=1200',
    link: '#',
  },
  {
    id: 7,
    title: 'MENTOR TO GO TRAINING SESSIONS',
    description: 'The I2IC Council introduced a personalized 6-month mentorship program, "Mentor to Go," for students except final years. Tailored to individual domains, fields, language, and gender, the program aims to enhance work-readiness skills. Pravin Sir guided students on app setup and navigation. The session concluded with students taking a screening test within the app to begin their mentorship journey.',
    image: '/events-slider/mentor-to-go.png?height=400&width=600',
    backgroundImage: '/events-slider/mentor-to-go.png?height=800&width=1200',
    link: '#',
  },
]


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
                    className="text-gray-600 leading-relaxed overflow-y-auto max-h-[200px] pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
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
                  <img
                    src={events[currentIndex].image}
                    alt={events[currentIndex].title}
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

