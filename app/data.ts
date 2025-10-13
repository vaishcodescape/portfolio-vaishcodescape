type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type Achievement = {
  title: string
  description: string
  date: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type TechStackCategory = {
  category: string
  technologies: string[]
}

export const PROJECTS: Project[] = [
  {
    name: 'Keradon',
    description:
      'AI-Powered web scraper that intelligently summarizes website content using Groq LLM.',
    link: 'https://github.com/vaishcodescape',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Crypto-Pi',
    description: 'Real-time cryptocurrency price monitoring system with automated alerts.',
    link: 'https://github.com/vaishcodescape',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Superr.AI',
    title: 'Product Engineer Intern',
    start: 'Aug 2025',
    end: 'Present',
    link: 'https://superr.ai',
    id: 'work1',
  },
  {
    company: 'Kwezy HQ',
    title: 'Product Engineer Intern',
    start: 'Aug 2025',
    end: 'Present',
    link: 'https://kwezy.com',
    id: 'work2',
  },
  {
    company: 'GDG On Campus, DAU',
    title: 'Core Team Member',
    start: 'Jul 2025',
    end: 'Present',
    link: 'https://gdg.community.dev',
    id: 'work3',
  },
]

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'IIM AhmedabadIMRC 2025 Conference Presentation',
    description:
      'Presented a research Machine Learning model on Perishable Agricultural Commodities focusing on AI-based optimization and sustainability',
    date: '2025',
    uid: 'achievement-1',
  },
  {
    title: 'IIM Ahmedabad CTDP 2025 Conference Presentation',
    description:
      'Presented "Dyslexia Detector App" at Conference on Technology for Disabled Persons, demonstrating assistive technology solutions',
    date: '2025',
    uid: 'achievement-2',
  },
  {
    title: 'Open Source Contributor & Mentor',
    description:
      'Led workshops and mentored 100+ students at GDG on Git, GitHub, DevOps, and MERN stack development, Contributed to Open Source competitions like Hacktoberfest and Google Summer of Code',
    date: '2025',
    uid: 'achievement-3',
  },
  {
    title: 'Dual Product Engineering Internships',
    description:
      'Successfully managing asynchronous roles at Superr.AI and Kwezy HQ, delivering scalable solutions across multiple projects',
    date: '2025',
    uid: 'achievement-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/vaishcodescape',
  },
  {
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/aditya-vaish-370494243',
  },
  {
    label: 'Phone',
    link: 'tel:+917248463142',
  },
]

export const TECH_STACK: TechStackCategory[] = [
  {
    category: 'Languages',
    technologies: ['C', 'C++', 'Python', 'Go', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Frontend',
    technologies: ['React.js', 'Next.js', 'React Native', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    technologies: ['Node.js', 'Express.js', 'Flask', 'FastAPI', 'Django'],
  },
  {
    category: 'DevOps & Cloud',
    technologies: ['Docker', 'Kubernetes', 'Vercel', 'Git', 'GitHub', 'GitLab'],
  },
  {
    category: 'Databases',
    technologies: ['SQL', 'MongoDB', 'Firebase', 'Supabase'],
  },
  {
    category: 'Core Concepts',
    technologies: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'System Design', 'Computer Networks'],
  },
]

export const EMAIL = 'adityavaish846@gmail.com'

