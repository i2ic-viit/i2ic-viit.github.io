'use client'

import Image from "next/image"
import { Quote } from 'lucide-react'
import { cn } from "@/lib/utils"

import { Card } from "@/components/ui/card"

interface TestimonialCardProps {
  name: string
  role?: string
  quote: string
  imageSrc?: string
  imagePosition?: 'left' | 'right'
}

export default function FacultyTestimonialCard({
  name,
  role,
  quote,
  imageSrc = "/images/hero.png",
  imagePosition = 'left',
}: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col">
      <div className={cn(
        "flex flex-col",
        "md:flex-row",
        imagePosition === 'right' && "md:flex-row-reverse"
      )}>
        <div className="w-full md:w-1/3 aspect-square relative">
          <Image
            src={imageSrc}
            alt={`${name}'s testimonial`}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="md:flex md:flex-col flex-1 p-6 space-y-4 md:justify-around">
          <div className="relative">
            <Quote className="absolute -top-2 -left-2 w-8 h-8 text-muted-foreground/20" />
            <Quote className="absolute -bottom-2 -right-2 w-8 h-8 text-muted-foreground/20 rotate-180" />
            <blockquote className="px-6 py-1 text-sm md:text-base italic text-muted-foreground">
              {quote}
            </blockquote>
          </div>

          <div className={cn("space-y-1 pt-4", imagePosition == "right" && "text-right")}>
            <h3 className="font-semibold text-xl md:text-2xl">{name}</h3>
            {role && <p className="text-xs md:text-sm text-muted-foreground">{role}</p>}
          </div>
        </div>
      </div>
    </Card>
  )
}
