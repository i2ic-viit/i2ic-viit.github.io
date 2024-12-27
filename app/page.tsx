import CompanySection from "@/components/home/companies-list";
import { EventsSlider } from "@/components/home/events-slider"
// import HeroSection from "@/components/home/hero";
import CommitteeSection from "@/components/home/committee-section";
import FeaturesGrid from "@/components/home/features";
import FacultySection from "@/components/home/faculty-section";
import LampHero from "@/components/ui/lamp";

export default function Home() {
  return (
    <div>
      <LampHero/>
      <FeaturesGrid/>
      <EventsSlider />
      <FacultySection/>
      <CommitteeSection/>
      <CompanySection/>
    </div> 
  );
}
