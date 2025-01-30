import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials"; 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function Testimonial() {
  return (
    <div className="relative w-full mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-2xl font-bold mb-4">Testimonials</h2>
      <Carousel className="w-full max-w-7xl mx-auto relative overflow-hidden">
        <CarouselContent className="flex gap-4 sm:gap-8 px-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="flex-none w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
            >
              <Card className="shadow-lg border border-gray-200 rounded-lg p-4">
                <CardContent className="p-6 sm:p-8 text-center flex flex-col justify-between h-full">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name}'s image`}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full mx-auto mb-6 border-4 border-sky-500 object-cover"
                  />
                  <h3 className="text-lg sm:text-2xl font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.batch}</p>
                  <p className="mt-4 italic text-gray-700">
                    &ldquo;{testimonial.experiance}&rdquo;
                  </p>
                  <p className="mt-6 text-sm font-medium text-gray-600">
                    {testimonial.event} -{" "}
                    <span className="text-gray-800">
                      {new Date(testimonial.date).toLocaleDateString('en-IN', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                      })}
                    </span>
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-y-0 left-0 flex items-center">
          <CarouselPrevious className="text-gray-700 hover:text-gray-900 transition-all duration-300 p-2 bg-white rounded-full shadow-md z-10 sm:p-4" />
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <CarouselNext className="text-gray-700 hover:text-gray-900 transition-all duration-300 p-2 bg-white rounded-full shadow-md z-10 sm:p-4" />
        </div>
      </Carousel>

    </div>
  );
}
