'use client';

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { events, type Event } from "@/data/events";
import { cn } from "@/lib/utils";

function EventCard({ index } : { index: number }) {
    const event: Event = events[index];

    return (
        <Card className="w-9/12 mx-auto bg-secondary/95 backdrop-blur-md">
            <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[450px]">
                    <div className="flex flex-col justify-center space-y-6 h-full overflow-hidden">
                        <span className="text-sm tracking-wider font-semibold text-secondary-foreground">{event.tag}</span>

                        <h2 className="text-4xl font-bold tracking-tight">{event.title}</h2>

                        <p className="text-muted-foreground leading-relaxed overflow-y-auto hidden md:block max-h-[200px] pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 text-sm">{event.description}</p>

                        <Button>
                            Find out more
                        </Button>
                    </div>

                    <div className="relative h-full overflow-hidden rounded-xl shadow-lg">
                        <Image
                            src={event.image}
                            alt={event.title}
                            fill 
                            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </CardContent>
           
        </Card>
    );
}

export default function EventsCarousel() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    // const [count, setCount] = useState(0);

    const plugin = useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    );

    useEffect(() => {
        if (!api) {
            return
        }

        // setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <div className="relative w-full h-screen overflow-hidden bg-foreground">
            <div
                key={`bg-carousel-${current}`}
                className="absolute inset-0 z-0"
            >
                <div className="w-full h-full bg-cover bg-center blur-sm scale-105" style={{ backgroundImage: `url(${events[current].backgroundImage})`}}/>
                <div className="absolute inset-0 bg-black/60 backdrop-blur-md"/>
            </div>

            <Carousel 
                className="z-10 container mx-auto w-full h-full px-4"
                setApi={setApi}
                plugins={[plugin.current]}
                opts={{
                    loop: true,
                    align: "center"
                }}
            >
                <div className="h-full flex justify-center flex-col">

                <CarouselContent>
                    {events.map((_, index) => (
                        <CarouselItem key={`event-card-${index}`} className="basis-full">
                            <EventCard index={index}/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                 <div className="flex justify-center gap-3 mt-8">
                    {events.map((_, idx) => (
                        <button
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                current === idx
                ? "bg-primary w-4"
                : "bg-background/20 hover:bg-background/40"
            )}
            aria-label={`Go to slide ${idx + 1}`}
            />
        ))}
            </div>
        </div>
                <CarouselNext className="bg-transparent hover:bg-white/20 text-white hover:text-white border-transparent hidden lg:inline-flex" />
                <CarouselPrevious className="bg-transparent hover:bg-white/20 text-white hover:text-white border-transparent hidden lg:inline-flex" />
            </Carousel>
        </div>
    )
}