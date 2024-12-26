import CompanyLogoSlider from "@/components/home/companies-list";
import { EventsSlider } from "@/components/home/events-slider"

export default function Home() {
  return (
    <div>
      <div className="min-h-screen">
      <EventsSlider />
    </div>
      <CompanyLogoSlider />
    </div> 
  );
}
