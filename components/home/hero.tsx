'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <div className="relative flex min-h-[50vh] h-[calc(100vh-64px)] md:h-[50vh] flex-col items-center justify-center px-4 py-12 text-center md:px-6 lg:px-8">
      <Image
          src={"/images/hero.jpg"}
          alt="Students and Industry"
          fill
          className="object-cover"
          priority
      />
      <div className="absolute inset-0 bg-black/50" />     
      {/* <div className="absolute inset-0 bg-white/50" />      */}
      
      {/* <h1 className="max-w-4xl font-bold tracking-tight text-sm sm:text-2xl md:text-4xl z-10 text-secondary">
        <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-300 bg-clip-text text-transparent text-3xl sm:text-5xl md:text-7xl mb-2">Empowering Students: </span> <br /> Connecting Education 
        with Industry for Success
      </h1> */}
      <div className="max-w-4xl font-bold tracking-tight text-sm z-10 text-secondary sm:text-2xl md:text-4xl flex flex-col">

        <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-300 bg-clip-text text-transparent text-3xl sm:text-5xl md:text-7xl pb-2">Empowering Students: </span> 
        <span>
          Connecting Education with Industry for Success
        </span>

      </div>

      <div className="mt-8 flex flex-col md:flex-row items-center gap-4 z-10">
        <Button size="lg" asChild>
          <Link href="/upcomming-drives">
            Upcomming Drives
          </Link>
        </Button>
        <Button variant="ghost" className="text-white" asChild>
          <Link href="#contact" className="flex items-center gap-2">
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

    </div>
  )
}


