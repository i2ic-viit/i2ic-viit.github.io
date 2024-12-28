'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <div className="relative flex min-h-[50vh] h-[calc(100vh-64px)] md:h-[50vh] flex-col items-center justify-center px-4 py-12 text-center md:px-6 lg:px-8">
      <Image
          src={"/images/hero.png"}
          alt="Students and Industry"
          fill
          className="object-cover"
          priority
      />
      <div className="absolute inset-0 bg-white/50" />     
      
      <h1 className="max-w-4xl font-bold tracking-tight text-sm sm:text-2xl md:text-4xl z-10">
      {/* <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"> */}
        <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-300 bg-clip-text text-transparent text-3xl sm:text-5xl md:text-7xl">Empowering Students: </span> <br /> Connecting Education 
        with Industry for Success
      </h1>


      <div className="mt-8 flex flex-col md:flex-row items-center gap-4 z-10">
        <Button size="lg">
          Upcomming Drives
        </Button>
        <Button variant="link" className="text-base" asChild>
          <Link href="/pricing" className="flex items-center gap-2">
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

    </div>
  )
}


