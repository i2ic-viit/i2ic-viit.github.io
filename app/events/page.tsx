"use client";
import EventSlider from "@/components/events/event-slider";
import HeroImage from "@/components/HeroImage";
import GallerySlider from "@/components/events/Gallary-slider"
export default function Events() {
  return (
    <div>
      <HeroImage title="Events"
        imageSrc="https://www.solidbackgrounds.com/images/1600x900/1600x900-dark-blue-solid-color-background.jpg" // Replace with your image URL
        altText="Events Hero Image"/>
      <EventSlider />
      {/* <center>hello in Events</center> */}
      <div style={{ position: "relative", zIndex: -1 }}>
      <GallerySlider />
      </div>
    </div>
  );
}
