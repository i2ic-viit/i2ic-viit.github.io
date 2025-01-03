import CompanySection from "@/components/home/companies-list";
import HeroSection from "@/components/home/hero";
import CommitteeSection from "@/components/home/committee-section";
import FeaturesGrid from "@/components/home/features";
import FacultySection from "@/components/home/faculty-section";
import NotificationSnackbar from "@/components/home/notification-snackbar";
import EventsCarousel from "@/components/home/events-carousel";
// import LampHero from "@/components/ui/lamp";

export default function Home() {
  return (
    <div>
      {/* <LampHero/> */}
      <HeroSection/>
      <FeaturesGrid/>
      <div className="text-primary text-xl md:text-3xl text-center font-semibold">
        Notifications
      </div>
      <NotificationSnackbar/>
      <div className="text-primary text-xl md:text-4xl text-center font-semibold mt-14"/>
      <EventsCarousel/>
      <FacultySection/>
      <CommitteeSection/>
      <CompanySection/>
    </div> 
  );
}
