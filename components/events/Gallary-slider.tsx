import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/events-slider/aiml-workshop/aiml-workshop.JPG", alt: "Image 1" },
  { src: "/events-slider/alumni_meetings/alumni-meet.JPG", alt: "Image 2" },
  { src: "/events-slider/saturday_club/sat_club_bg.jpg", alt: "Image 3" },
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative w-full mx-auto my-5">
      <h2 className="text-center text-2xl font-bold mb-4">Gallery</h2>

      <div className="relative h-[460px] overflow-hidden rounded-lg shadow-lg">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          layout="fill"
          className="object-cover transition-opacity duration-500"
        />
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-70 text-white p-3 rounded-full z-20 hover:bg-blue-600 transition-all duration-300"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-70 text-white p-3 rounded-full z-20 hover:bg-blue-600 transition-all duration-300"
      >
        &#10095; 
      </button>

      <div className="flex justify-center mt-4 gap-3">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-6 rounded-md transition-all ${index === currentIndex ? "bg-blue-400 scale-110" : "bg-gray-400"}`}
          ></div>
        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="flex items-center justify-center w-20 h-12 border-2 border-transparent rounded-md hover:border-blue-400 transition-all duration-300"
          >
            <Image
              src={image.src}
              alt={image.alt}
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
