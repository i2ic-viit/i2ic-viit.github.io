'use client'

import { motion } from 'framer-motion'
import { faculty } from '@/data/commitee'
import Image from 'next/image'

export default function FacultyCoordinators() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Faculty Coordinators</h2>
          <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60 mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {faculty.map((coordinator, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-4 sm:mb-6">
                <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-lg">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 via-primary/20 to-transparent p-1">
                    <div className="w-full h-full rounded-full overflow-hidden shadow-inner">
                      <Image
                        src={coordinator.imageSrc}
                        alt={coordinator.name}
                        width={192}
                        height={192}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground">
                  {coordinator.name}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  {coordinator.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

