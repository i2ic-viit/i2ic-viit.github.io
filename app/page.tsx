import CompanySection from "@/components/home/companies-list";
import { EventsSlider } from "@/components/home/events-slider"
// import HeroSection from "@/components/home/hero";
import CommitteeSection from "@/components/home/committee-section";
import FeaturesGrid from "@/components/home/features";
import FacultySection from "@/components/home/faculty-section";
import LampHero from "@/components/ui/lamp";
import { FloatingNotifications } from "@/components/floating-notifications";

export default function Home() {
  return (
    <div>
      <FloatingNotifications/>
      <LampHero/>
      <FeaturesGrid/>
      <EventsSlider />
      <FacultySection/>
      <CommitteeSection/>
      <CompanySection/>
    </div> 
  );
}
