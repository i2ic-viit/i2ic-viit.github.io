"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import image1 from "@/public/events-slider/aiml-workshop/aiml-workshop.JPG";
import image2 from "@/public/events-slider/alumni_meetings/alumni-meet.JPG";
import image3 from "@/public/events-slider/saturday_club/sat_club_bg.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageData {
  src: string | StaticImageData;
}

const images: ImageData[] = [
  { src: image1 },
  { src: image2 },
  { src: image3 },
];

export default function ImageSlider(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <div className="relative w-full mx-auto my-5">
      <h2 className="text-center text-2xl font-bold mb-4">Gallery</h2>

      <div
        className="relative h-[460px] overflow-hidden rounded-lg shadow-lg"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10 transition-opacity duration-300 opacity-0 hover:opacity-40"></div>
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          layout="fill"
          className="object-cover transition-opacity duration-500"
        />
      </div>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-70 text-white p-3 rounded-full z-20 hover:bg-opacity-90 transition-all duration-300 ease-in-out"
        onClick={prevSlide}
      >
        <ChevronLeft />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-70 text-white p-3 rounded-full z-20 hover:bg-opacity-90 transition-all duration-300 ease-in-out"
        onClick={nextSlide}
      >
        <ChevronRight />
      </button>

      <div className="flex justify-center mt-4 gap-3">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-6 rounded-md transition-all ${
              index === currentIndex ? "bg-lime-400 scale-110" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center mt-6 space-x-4">
        {images.map((image, index) => (
          <button
            key={index}
            className="flex items-center justify-center w-20 h-12 border-2 border-transparent rounded-md hover:border-lime-400 transition-all duration-300"
            onClick={() => setCurrentIndex(index)}
          >
            <Image
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              width={80}
              height={60}
              className="object-cover rounded-md"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
