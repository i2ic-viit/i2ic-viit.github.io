export type Event = {
  id: string | number,
  title: string,
  tag?: string,
  description: string,
  image: string,
  backgroundImage: string,
  link: string
};

export const events: Event[] = [
  {
    id: 1,
    title: 'Saturday Club',
    description: 'The Saturday Club, held twice a semester, offers diverse activities like mock interviews, group discussions, and project presentations to prepare students for the latest interview trends. Esteemed alumni guide students, helping build industrial connections. Core and HR mock interviews were conducted for various branches. Participants received valuable feedback and networking opportunities. Pre-placement talks provided insights into company processes.',
    image: '/events-slider/saturday_club/sat_club.JPG?height=400&width=600',
    backgroundImage: '/events-slider/saturday_club/sat_club_bg.jpg?height=800&width=1200',
    link: '#',
  },
  {
    id: 2,
    title: 'SMS GROUP PLACEMENT DRIVE',
    description: 'I2IC organizes placement drives to connect students with top companies, offering opportunities to launch their careers. The SMS Group Placement Drive highlighted this initiative, where students participated in rigorous selection processes. With pre-placement talks and technical assessments, the drive gave students a comprehensive exposure to industry requirements. Recruiters shared valuable insights into career growth and expectations. These drives bridge the gap between academia and industry, fostering professional growth.',
    image: '/events-slider/SMS-GROUP-PLACEMENT-DRIVE/pd.jpeg?height=400&width=600',
    backgroundImage: '/events-slider/SMS-GROUP-PLACEMENT-DRIVE/pd-bg.jpeg?height=800&width=1200',
    link: '#',
  },
  {
    id: 3,
    title: 'Alumni Meetings',
    description: 'Alumni meetings at I2IC serve as a platform for students to connect with successful alumni across various fields. Held multiple times each semester, these sessions provide guidance on industry trends, career development, and building professional networks. Esteemed alumni share their experiences, offering practical insights to bridge the academic-industry gap. The interactive format encourages students to seek advice and establish meaningful connections. These meetings foster mentorship and inspire students to excel in their professional journeys.',
    image: '/events-slider/alumni_meetings/alumni-meet.JPG?height=400&width=600',
    backgroundImage: '/events-slider/alumni_meetings/alumni-meet.JPG?height=800&width=1200',
    link: '#',
  },
  {
    id: 4,
    title: 'LTI MINDTREE VISIT',
    tag: 'INDUSTRY VISIT',
    description: 'In the Industry visit of 30th November 2023, Mr. Kaustubh Anush Anwekar conducted an insightful session on Generative AI for TY and final-year students at I2IC. The session covered the uses and applications of Generative AI, along with topics like RNN and deep learning. Students showcased their AI and ML projects to the guest at the end. This interactive session offered valuable insights into advanced AI concepts and practical applications.',
    image: '/events-slider/LTI-MINDTREE/LTI.jpeg?height=400&width=600',
    backgroundImage: '/events-slider/LTI-MINDTREE/ltimindtree.jpeg?height=800&width=1200',
    link: '#',
  },
  {
    id: 5,
    title: 'Resume Building Sessions',
    description: 'On 28th October 2023, I2IC hosted a resume-building session led by Mr. Vivek Choudhary, a graduate from VESIT Mumbai and holds an MBA from IIM Trichy. With over five years of corporate experience at companies like Accenture, ICICI Prudential, LIC, and Bajaj Allianz. Over 150 final-year students attended the offline session organized by VIITs TPO. Mr. Solanki shared key insights into crafting professional resumes, dos and donts, and practical examples. The session emphasized the importance of a well-structured resume in placements and included guidance on online and offline resume creation. Students left equipped to build impactful resumes, making the event a resounding success.',
    image: '/events-slider/resume_building _sessions/res_build.jpg?height=400&width=600',
    backgroundImage: '/events-slider/resume_building_sessions/res_buil_bg.jpg?height=800&width=1200',
    link: '#',
  },
  {
    id: 6,
    title: 'AI-ML WORKSHOPS',
    description: 'The I2IC Council, in collaboration with NXTWAVE, conducted a workshop focused on generative AI and its applications. The session covered Artificial Narrow Intelligence, Artificial General Intelligence, prompt engineering, and the development of a generative AI model. Core concepts of AI, ML, and DL were explored, alongside analytical and generative AI. The workshop also highlighted real-time AI applications and their limitations, providing students with practical insights into AI development.',
    image: '/events-slider/aiml-workshop/aiml-workshop.JPG?height=400&width=600',
    backgroundImage: '/events-slider/aiml-workshop/aiml-workshop-bg.JPG?height=800&width=1200',
    link: '#',
  },
  {
    id: 7,
    title: 'MENTOR TO GO TRAINING SESSIONS',
    description: 'The I2IC Council introduced a personalized 6-month mentorship program, "Mentor to Go," for students except final years. Tailored to individual domains, fields, language, and gender, the program aims to enhance work-readiness skills. Pravin Sir guided students on app setup and navigation. The session concluded with students taking a screening test within the app to begin their mentorship journey.',
    image: '/events-slider/mentor-to-go.png?height=400&width=600',
    backgroundImage: '/events-slider/mentor-to-go.png?height=800&width=1200',
    link: '#',
  },
]
