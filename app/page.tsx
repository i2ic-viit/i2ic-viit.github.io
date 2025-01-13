import CompanySection from "@/components/home/companies-list";
// import CommitteeSection from "@/components/home/committee-section";
import CommitteeSection from "@/components/home/committee-members";
import FeaturesGrid from "@/components/home/features";
import NotificationSnackbar from "@/components/home/notification-snackbar";
import Hero from "@/components/home/NewHero";
import EventsCarousel from "@/components/home/events-carousel";
import FacultyCoordinators from "@/components/home/faculty-coordinators";
// import LampHero from "@/components/ui/lamp";

export default function Home() {
  return (
    <div>
      {/* <LampHero/> */}
      <Hero/>
      <FeaturesGrid/>
      <div className="text-primary text-xl md:text-3xl text-center font-semibold">
        Notifications
      </div>
      <NotificationSnackbar/>
      <div className="text-primary text-xl md:text-4xl text-center font-semibold mt-14"/>
      <EventsCarousel/>
      <FacultyCoordinators/>
      <CommitteeSection/>
      <CompanySection/>
    </div> 
  );
}
