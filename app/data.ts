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
    video: '/keradon.png',
    id: 'project1',
  },
  {
    name: 'Crypto-Pi',
    description: 'Real-time cryptocurrency price monitoring system with automated alerts.',
    link: 'https://github.com/vaishcodescape',
    video: '/crypto-pi.png',
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
    company: 'Google Developer Group (GDG) On Campus, DAU',
    title: 'Core Team Member',
    start: 'Jul 2025',
    end: 'Present',
    link: 'https://gdg.community.dev',
    id: 'work3',
  },
]

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'IIM Ahmedabad IMRC 2025 Conference Presentation',
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
    link: 'tel:+91 7248463142',
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
    category:'A.I/M.L',
    technologies: ['Hugging Face Transformers','LangGraph','Langchain','LlamaIndex','LLM API', 'Google-Colab'],
  },
  {
    category: 'Databases',
    technologies: ['SQL', 'MongoDB', 'Firebase', 'Supabase'],
  },
  {
    category: 'Core Concepts',
    technologies: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'System Design', 'Computer Networks'],
  },
  {
    category: 'A.I/M.L',
    technologies: ['Hugging Face Transformers','LangGraph','Langchain','LlamaIndex','LLM API', 'Google-Colab'],
  },
]

export const EMAIL = 'adityavaish846@gmail.com'

