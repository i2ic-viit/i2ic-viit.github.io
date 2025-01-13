import Image from 'next/image';
// import { Footer } from "@/components/footer";
// import Navbar from "@/components/new-navbar";

export default function Events() {
  return (
    <div className="bg-white text-gray-800">
      {/* Navbar Section */}
      {/* <Navbar/> */}
      
      {/* About Section */}
      <section className="py-16 px-8 bg-blue-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-700">About I2IC</h2>
          <p className="mt-6 text-gray-700 leading-relaxed max-w-4xl mx-auto">
            The I2IC Council works collaboratively to uplift students through training, internships, placements,
            and fostering industry relations. Under the guidance of the Training and Placement Cell, we bridge
            the gap between academia and industry, promoting innovation, skill development, and project-based
            learning opportunities.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Since its establishment, I2IC has successfully conducted numerous guest lectures, workshops,
            competitions, and more. With over 32 members, the council works as a united team supporting the
            development of students at VIIT, ensuring industry exposure and continuous learning opportunities.
          </p>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-blue-700 text-center">Our Objectives</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {[
              "Provide internships and placement assistance for final-year students.",
              "Create awareness and guidance for higher education in India and abroad.",
              "Organize skill-based training sessions every semester.",
              "Establish research labs and MOUs with industry collaborations.",
              "Engage students in real-world, industry-based projects.",
              "Facilitate collaborative research and technology transfer initiatives.",
            ].map((objective, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <p className="text-gray-700 font-medium">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Industry Relations */}
      <section className="py-16 px-8 bg-blue-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-700">About Industry Relations</h2>
          <p className="mt-6 text-gray-700 leading-relaxed max-w-4xl mx-auto">
            The collaboration between industry and academia is vital for skill development and project-based
            learning. At VIIT, the Department of Industry Relations bridges this gap by connecting students
            with industries for internships, guest lectures, research, and real-world problem-solving.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Established in 2016, the department facilitates activities like industry visits, specialized training,
            and innovative projects. This partnership creates a self-sustained ecosystem benefiting students,
            faculty, and industry alike.
          </p>
        </div>
      </section>

      {/* Key Personnel Section */}
      <section className="py-16 px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-blue-700 text-center">Key Personnel</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-8">
            {[
              { name: "Dr. Atul P. Kulkarni", position: "Dean Corporate Relations", image: "/images/committee/faculty/dr_atul_kulkarni.png" },
              { name: "Dr. Leena A Deshpande", position: "Associate Dean Industry Relations", image: "/images/committee/faculty/dr_leena_deshpande.png" },
              { name: "Mr. Vishwajit Kate Deshmukh", position: "Training and Placement Officer", image: "/images/committee/faculty/dr_vishwajit_deshmukh.png" },
              { name: "Mr. Vishal B. Ambhore", position: "Associate Training and Placement Officer", image: "/images/committee/faculty/dr_vishal_ambore.png" },
            ].map((person, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={person.image}
                  alt={`${person.name}`}
                  width={300}
                  height={500} 
                  className="w-full object-cover h-64" 
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-800">{person.name}</h3>
                  <p className="text-gray-600">{person.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      {/* <Footer/> */}
    </div>
  );
}
