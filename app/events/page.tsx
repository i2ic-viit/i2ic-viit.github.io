"use client";
import EventSlider from "@/components/events/event-slider";
import HeroImage from "@/components/HeroImage";
import GallerySlider from "@/components/events/Gallary-slider"
import { Testimonial } from "@/components/events/testimonials-carousel";
import { events } from "@/data/events"; 
export default function Events() {
  return (
    <div>
      <HeroImage title="Events"
        imageSrc="https://www.solidbackgrounds.com/images/1600x900/1600x900-dark-blue-solid-color-background.jpg" 
        altText="Events Hero Image"/>
      <EventSlider events={events}/>
      <div style={{ position: "relative" }}>
        <GallerySlider />
      </div>
        <Testimonial />
    </div>
  );
}
