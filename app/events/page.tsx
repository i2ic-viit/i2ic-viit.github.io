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
        imageSrc="./events-slider/resume_building _sessions/res_build.jpg" 
        altText="Events Hero Image"/>
      <EventSlider events={events}/>
      <div style={{ position: "relative" }}>
        <GallerySlider />
      </div>
        <Testimonial />
    </div>
  );
}
