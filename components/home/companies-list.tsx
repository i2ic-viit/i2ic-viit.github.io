'use client';

import { useState, useEffect, useRef } from "react"; 
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import Image from "next/image"
import { cn } from "@/lib/utils"
import Autoplay from "embla-carousel-autoplay"
import { companies } from "@/data/companies";

export function CompaniesList() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-1">
          {companies.map((image, index) => (
            <CarouselItem key={index} className="pl-1 basis-full md:basis-1/3 lg:basis-1/5">
              <div className="p-1">
                <Card className="border-0 shadow-none">
                  <div className="aspect-[2/1] flex items-center justify-center p-2">
                    <Image
                      src={image.logo}
                      alt={image.name}
                      width={400}
                      height={200}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === current
                  ? "bg-primary w-4"
                  : "bg-muted-foreground/20 hover:bg-muted-foreground/40"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
  )
}

export default function CompanySection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 mb-10">
      <h1 className="text-4xl md:text-6xl text-center font-bold mb-8">Companies</h1>
      <p className="text-center text-muted-foreground mb-8">The list of companies where our students have placed</p>
      <CompaniesList/>
    </div>
  )
}
