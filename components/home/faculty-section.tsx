import FacultyTestimonialCard from "@/components/home/faculty-card";
import { faculty } from "@/data/commitee";

export default function FacultySection() {
    return (
    <div className="container mx-auto p-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-8">Faculty</h1>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {faculty.map((testimonial, index) => (
            <FacultyTestimonialCard key={index} {...testimonial} />
            ))}
        </div>
    </div>
  )
}
