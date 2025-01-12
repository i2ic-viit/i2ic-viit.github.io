'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'
import { Card } from "@/components/ui/card"
import { committeeMembers } from '@/data/commitee'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function CommitteeSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const controls = useAnimation()
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          controls.start('visible')
        }
      },
      { threshold: 0.1 }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-secondary to-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Committee</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated individuals who drive our organization forward.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {committeeMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Card 
                className="relative overflow-hidden border-none shadow-md bg-card hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex flex-col items-center p-6 relative z-10">
                  <div className="relative w-32 h-32 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full" />
                    <Image
                      src="/images/committee/faculty/image.png"
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                    {member.linkedinUrl && (
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-0 right-0 bg-card rounded-full p-2 shadow-lg transform translate-x-1/4 translate-y-1/4 hover:scale-110 transition-transform duration-300 ease-in-out"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold text-center mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground text-center">{member.role}</p>
                </div>

                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button 
            variant="outline" 
            size="lg"
            className="bg-card hover:bg-primary hover:text-primary-foreground transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            View the Full Committee <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

