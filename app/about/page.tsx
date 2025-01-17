'use client';
import { motion } from 'framer-motion';
import CommitteeSection from '@/components/home/committee-members';
import FacultyCoordinators from '@/components/home/faculty-coordinators';

// Animation variants for framer-motion
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutUs() {
  // Objectives data
  const objectives = [
    "Provide internships and placement assistance for final-year students.",
    "Create awareness and guidance for higher education in India and abroad.",
    "Organize skill-based training sessions every semester.",
    "Establish research labs and MOUs with industry collaborations.",
    "Engage students in real-world, industry-based projects.",
    "Facilitate collaborative research and technology transfer initiatives.",
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* About Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.5 }}
        className="py-16 px-8 bg-blue-50"
      >
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
      </motion.section>

      {/* Objectives Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.5 }}
        className="py-16 px-8 bg-white"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-blue-700 text-center">Our Objectives</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4">
                  {/* Icon */}
                  <span className="text-blue-500">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 16h-1v-4h-1m1 4V9h-1m5 11H6m3-10h4m-4 5h4m-4 0v-3h4m0-1h4M6 5h4m-2 4h6"
                      />
                    </svg>
                  </span>
                  {/* Objective Text */}
                  <p className="text-gray-700 font-medium">{objective}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Industry Relations */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.5 }}
        className="py-16 px-8 bg-blue-50"
      >
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
      </motion.section>

      {/* Faculty Coordinators Section */}
      <FacultyCoordinators />

      {/* Committee Members Section */}
      {/* <CommitteeSection /> */}
      <CommitteeSection showViewAllButton={false} />
    </div>
  );
}
