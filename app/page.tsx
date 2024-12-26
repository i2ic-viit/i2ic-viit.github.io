import CompanyLogoSlider from "@/components/home/companies-list";
import { EventsSlider } from "@/components/home/events-slider"
import HeroSection from "@/components/home/hero";
import FeaturesGrid from "@/components/home/features";
import FacultySection from "@/components/home/faculty-section";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeaturesGrid/>
      <EventsSlider />
      <FacultySection/>
      <CompanyLogoSlider />
    </div> 
  );
}
