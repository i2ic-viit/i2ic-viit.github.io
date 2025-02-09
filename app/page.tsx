import CompanySection from "@/components/home/companies-list";
import CommitteeSection from "@/components/home/committee-members";
import FeaturesGrid from "@/components/home/features";
import NotificationSnackbar from "@/components/home/notification-snackbar";
import EventsCarousel from "@/components/home/events-carousel";
import FacultyCoordinators from "@/components/home/faculty-coordinators";
import Hero from "@/components/home/hero";

export default function Home() {
    return (
        <div>
            <Hero />
            <FeaturesGrid />
            <div className="text-primary text-xl md:text-3xl text-center font-semibold">
                Notifications
            </div>
            <NotificationSnackbar />
            <div className="text-primary text-xl md:text-4xl text-center font-semibold mt-14" />
            <EventsCarousel />
            <FacultyCoordinators />
            <CommitteeSection />
            <CompanySection />
        </div>
    );
}
