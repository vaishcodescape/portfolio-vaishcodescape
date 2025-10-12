import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Aditya",
  lastName: "Vaish",
  name: `Aditya Vaish`,
  role: "Full Stack Developer",
  avatar: "/images/profile_pic.jpg",
  email: "adityavaish846@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/vaishcodescape",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/aditya-vaish-370494243",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building innovative solutions with AI and full-stack development</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Keradon</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/keradon-ai-powered-web-scraper",
  },
  subline: (
    <>
      I'm Aditya, a Product Engineer Intern at Superr.AI and Kwezy HQ, where I develop
      <br /> AI-powered solutions and full-stack applications. Currently pursuing B.Tech in ICT.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Aditya, a U.S. Green Card holder and currently a Product Engineer Intern at Superr.AI and Kwezy HQ,
        I'm passionate about building innovative AI-powered solutions and full-stack applications.
        I'm interested in modern web technologies, AI integration, and scalable system design.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Superr.AI",
        timeframe: "Aug 2025 - Present",
        role: "Product Engineer Intern",
        achievements: [
          <>
            Developed client-focused projects by integrating Next.js with Deep Learning Models via REST APIs, ensuring fast and reliable delivery.
          </>,
          <>
            Designed and implemented responsive UI components, enhancing user engagement and usability.
          </>,
          <>
            Created high-performance backend data pipelines using GoLang, boosting application processing speed.
          </>,
          <>
            Collaborated closely with the Design Team to refine UI/UX workflows and optimize user journeys.
          </>,
          <>
            Worked asynchronously in a startup environment, balancing product deadlines with maintainable and scalable software design.
          </>,
        ],
        images: [],
      },
      {
        company: "Kwezy HQ",
        timeframe: "Aug 2025 - Present (Asynchronous)",
        role: "Product Engineer Intern",
        achievements: [
          <>
            Developed and deployed full-stack web applications and internal tools for both client projects and in-house software.
          </>,
          <>
            Contributed to frontend development using Next.js and React, ensuring seamless integration with backend APIs.
          </>,
          <>
            Assisted in architecting backend systems using Node.js and FastAPI, focusing on performance and maintainability.
          </>,
          <>
            Implemented version control workflows using Git and GitHub for efficient collaboration across distributed teams.
          </>,
          <>
            Enhanced cross-team coordination and code delivery in a fully asynchronous working environment.
          </>,
        ],
        images: [],
      },
      {
        company: "GDG (Google Developer Group) On Campus, DAU",
        timeframe: "Jul 2025 – Present",
        role: "Core Team Member",
        achievements: [
          <>
            Organized and conducted hands-on workshops on Git, GitHub, DevOps, and MERN stack for 100+ students.
          </>,
          <>
            Led open-source initiatives such as SLoP(Semester Long Projects) within the university, managing repositories, code reviews, and collaborative sprints.
          </>,
          <>
            Mentored junior developers during internal hackathons, guiding them in API integration, deployment, and architecture.
          </>,
          <>
            Promoted peer-led learning and open-source culture via Discord sessions, GitHub collaborations, and community showcases.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Dhirubhai Ambani University, Gandhinagar, Gujarat",
        description: <>B.Tech in Information and Communication Technology (ICT) with Minor in Computational Science. Currently pursuing degree since Jul 2024.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Languages",
        description: (
          <>Programming languages I use for development and problem solving.</>
        ),
        tags: [
          {
            name: "C",
            icon: "cplusplus",
          },
          {
            name: "C++",
            icon: "cplusplus",
          },
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "Go",
            icon: "go",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
        ],
        images: [],
      },
      {
        title: "Frameworks & Libraries",
        description: (
          <>Modern web frameworks and libraries for full-stack development.</>
        ),
        tags: [
          {
            name: "React.js",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "React Native",
            icon: "react",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "Express.js",
            icon: "express",
          },
          {
            name: "FastAPI",
            icon: "fastapi",
          },
          {
            name: "Flask",
            icon: "flask",
          },
          {
            name: "Django",
            icon: "django",
          },
          {
            name: "Tailwind CSS",
            icon: "tailwindcss",
          },
        ],
        images: [],
      },
      {
        title: "Databases & Cloud",
        description: (
          <>Database systems and cloud platforms for scalable applications.</>
        ),
        tags: [
          {
            name: "SQL",
            icon: "database",
          },
          {
            name: "MongoDB",
            icon: "mongodb",
          },
          {
            name: "Firebase",
            icon: "firebase",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "Kubernetes",
            icon: "kubernetes",
          },
          {
            name: "Vercel",
            icon: "vercel",
          },
        ],
        images: [],
      },
      {
        title: "Tools & Technologies",
        description: (
          <>Development tools and version control systems for efficient workflow.</>
        ),
        tags: [
          {
            name: "Git",
            icon: "git",
          },
          {
            name: "GitHub",
            icon: "github",
          },
          {
            name: "GitLab",
            icon: "gitlab",
          },
          {
            name: "Postman",
            icon: "postman",
          },
          {
            name: "Linux",
            icon: "linux",
          },
        ],
        images: [],
      },
    ],
  },
  achievements: {
    display: true, // set to false to hide this section
    title: "Achievements & Recognition",
    items: [
      {
        title: "IIM Ahmedabad CTDP 2025 Conference Presentation",
        description: <>Presented "Dyslexia Detector App" at IIM Ahmedabad's Conference on Technology for Disabled Persons, showcasing innovative accessibility solutions.</>,
        date: "2025",
      },
      {
        title: "Top Accessibility Projects Recognition",
        description: <>Recognized among Top Accessibility Projects by IIM-A for outstanding contribution to inclusive technology development.</>,
        date: "2025",
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
