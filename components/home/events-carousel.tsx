'use client';

// import { useState, useEffect, useRef } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { 
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
//     type CarouselApi
// } from "@/components/ui/carousel";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Autoplay from "embla-carousel-autoplay";
import { events, type I2ICEvent } from "@/data/events";
// import { cn } from "@/lib/utils";

// function EventCard({ index } : { index: number }) {
//     const event: Event = events[index];

//     return (
//         <Card className="w-9/12 mx-auto bg-secondary/95 backdrop-blur-md">
//             <CardContent className="p-4 md:p-8">
//                 <div className="flex flex-col md:flex-row gap-8 h-[450px]">
//                 {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[450px]"> */}
//                     <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg flex-shrink-0 md:max-w-[60%]">
//                         <Image
//                             src={event.imageUrl}
//                             alt={event.title}
//                             fill 
//                             className="object-cover transform hover:scale-105 transition-transform duration-700"
//                         />
//                     </div>
//                     <div className="flex flex-col justify-center space-y-6 h-full w-full">
//                         <span className="text-sm tracking-wider font-semibold text-secondary-foreground">{event.tag || "Event"}</span>

//                         <h2 className="text-2xl md:text-4xl font-bold tracking-tight">{event.title}</h2>

//                         <p className="text-muted-foreground leading-relaxed overflow-y-auto hidden md:block max-h-[200px] pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 text-sm">{event.description}</p>

//                         <Button>
//                             Find out more
//                         </Button>
//                     </div>
//                 </div>
//             </CardContent>
           
//         </Card>
//     );
// }

// export default function EventsCarousel() {
//     const [api, setApi] = useState<CarouselApi>();
//     const [current, setCurrent] = useState(0);
//     // const [count, setCount] = useState(0);

//     const plugin = useRef(
//         Autoplay({ delay: 5000, stopOnInteraction: true })
//     );

//     useEffect(() => {
//         if (!api) {
//             return
//         }

//         // setCount(api.scrollSnapList().length);
//         setCurrent(api.selectedScrollSnap());

//         api.on("select", () => {
//             setCurrent(api.selectedScrollSnap());
//         });
//     }, [api]);

//     return (
//         <div className="relative w-full h-screen overflow-hidden bg-foreground">
//             <div
//                 key={`bg-carousel-${current}`}
//                 className="absolute inset-0 z-0"
//             >
//                 <div className="w-full h-full bg-cover bg-center blur-sm scale-105" style={{ backgroundImage: `url(${events[current].backgroundImage})`}}/>
//                 <div className="absolute inset-0 bg-black/60 backdrop-blur-md"/>
//             </div>

//             <Carousel 
//                 className="z-10 container mx-auto w-full h-full px-4"
//                 setApi={setApi}
//                 plugins={[plugin.current]}
//                 opts={{
//                     loop: true,
//                     align: "center"
//                 }}
//             >
//                 <div className="h-full flex justify-center flex-col">

//                 <CarouselContent>
//                     {events.map((_, index) => (
//                         <CarouselItem key={`event-card-${index}`} className="basis-full">
//                             <EventCard index={index}/>
//                         </CarouselItem>
//                     ))}
//                 </CarouselContent>
//                  <div className="flex justify-center gap-3 mt-8">
//                     {events.map((_, idx) => (
//                         <button
//               key={idx}
//               onClick={() => api?.scrollTo(idx)}
//               className={cn(
//                 "w-2 h-2 rounded-full transition-all duration-300",
//                 current === idx
//                 ? "bg-primary w-4"
//                 : "bg-background/20 hover:bg-background/40"
//             )}
//             aria-label={`Go to slide ${idx + 1}`}
//             />
//         ))}
//             </div>
//         </div>
//                 <CarouselNext className="bg-transparent hover:bg-white/20 text-white hover:text-white border-transparent hidden lg:inline-flex" />
//                 <CarouselPrevious className="bg-transparent hover:bg-white/20 text-white hover:text-white border-transparent hidden lg:inline-flex" />
//             </Carousel>
//         </div>
//     )
// }
import { EventCard } from "./event-card";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

export default function EventsCarousel() {
    return (
      <section className="w-full py-12 bg-[#001737]">
        <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {events.slice(0, 6).map((event: I2ICEvent, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>

        <div className="text-center pt-8">
          <Button 
            variant="outline" 
            size="lg"
            // className="hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View All Events <ArrowUpRight className="size-4"/>
          </Button>
        </div>
      </section>
    )
}