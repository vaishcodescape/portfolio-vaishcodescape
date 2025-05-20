"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  SiJavascript, 
  SiMongodb, 
  SiExpress, 
  SiReact, 
  SiNodedotjs, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiPython, 
  SiDjango, 
  SiFlask, 
  SiFastapi 
} from "react-icons/si";

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative flex flex-col min-h-screen text-neutral-100 overflow-hidden"
    >
      {/* Dynamic Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "linear-gradient(to bottom right, #000000, #0a0a0a, #141414)",
            "linear-gradient(to bottom right, #0a0a0a, #141414, #000000)",
            "linear-gradient(to bottom right, #141414, #000000, #0a0a0a)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute inset-0 -z-10 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, #1a1a1a 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, #1a1a1a 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, #1a1a1a 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center py-20 gap-4 transition-all duration-300 hover:scale-105"
      >
        <motion.div
          className="relative w-32 h-32 mb-4 flex items-center justify-center"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {/* Refined Animated SVG AV Logo with White Circle */}
          <motion.svg
            width="100" height="100" viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 mx-auto block"
          >
            {/* Animated White Circle */}
            <motion.circle
              cx="50" cy="50" r="46"
              stroke="#fff"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5 }}
              style={{ filter: 'drop-shadow(0 0 8px #fff)' }}
            />
            {/* A like N (centered) */}
            <motion.line
              x1="28" y1="75" x2="45" y2="28"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2 }}
            />
            <motion.line
              x1="45" y1="28" x2="62" y2="75"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            />
            <motion.line
              x1="34" y1="60" x2="56" y2="60"
              stroke="#fff"
              strokeWidth="2.2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            />
            {/* V like X (tall, prominent, but inside the circle) */}
            <motion.line
              x1="65" y1="25" x2="77" y2="75"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            />
            <motion.line
              x1="89" y1="25" x2="77" y2="75"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            />
          </motion.svg>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold tracking-tight transition-all duration-300 hover:text-blue-400"
        >
          Aditya Vaish
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-neutral-400 transition-all duration-300 hover:text-blue-300"
        >
          Programmer | Developer | Entrepreneur
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-xl text-center text-neutral-400 mt-2 transition-all duration-300 hover:text-blue-300"
        >
          Welcome to my personal portfolio! Here you'll find my skills, achievements, and projects. Hope it motivates you to push yourself!
        </motion.p>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-12 px-4 max-w-3xl mx-auto w-full transition-all duration-300 hover:scale-105"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold mb-6 border-b border-neutral-800 pb-2 transition-all duration-300 hover:text-blue-400"
        >
          Skills
        </motion.h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {[
            { name: 'JavaScript', icon: <SiJavascript className="w-5 h-5" />, hoverClass: 'hover:bg-yellow-500' },
            { name: 'MongoDB', icon: <SiMongodb className="w-5 h-5" />, hoverClass: 'hover:bg-green-500' },
            { name: 'Express', icon: <SiExpress className="w-5 h-5" />, hoverClass: 'hover:bg-red-500' },
            { name: 'React', icon: <SiReact className="w-5 h-5" />, hoverClass: 'hover:bg-blue-500' },
            { name: 'Node.js', icon: <SiNodedotjs className="w-5 h-5" />, hoverClass: 'hover:bg-green-500' },
            { name: 'Next.js', icon: <SiNextdotjs className="w-5 h-5" />, hoverClass: 'hover:bg-black' },
            { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-5 h-5" />, hoverClass: 'hover:bg-blue-500' },
            { name: 'Python', icon: <SiPython className="w-5 h-5" />, hoverClass: 'hover:bg-blue-500' },
            { name: 'Django', icon: <SiDjango className="w-5 h-5" />, hoverClass: 'hover:bg-green-700' },
            { name: 'Flask', icon: <SiFlask className="w-5 h-5" />, hoverClass: 'hover:bg-gray-500' },
            { name: 'FastAPI', icon: <SiFastapi className="w-5 h-5" />, hoverClass: 'hover:bg-blue-700' }
          ].map((skill, index) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-neutral-800 px-4 py-2 rounded-lg text-sm font-medium shadow transition-all duration-300 ${skill.hoverClass} hover:shadow-lg flex items-center gap-2`}
            >
              {skill.icon}
              {skill.name}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-12 px-4 max-w-3xl mx-auto w-full transition-all duration-300 hover:scale-105"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold mb-6 border-b border-neutral-800 pb-2 transition-all duration-300 hover:text-blue-400"
        >
          Projects
        </motion.h2>
        <motion.ul 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <motion.li 
            whileHover={{ scale: 1.02 }}
            className="bg-neutral-900 p-4 rounded-lg shadow border border-neutral-800 transition-all duration-300 hover:bg-blue-900 hover:shadow-lg"
          >
            <span className="font-bold">Project:</span> A Music Streaming Web app called "Mudex Music" for listeners and Artists to upload their music and connect with listeners built with Next.js and Express with a firebase database.
            <a href="#" className="text-blue-400 hover:underline transition-all duration-300 hover:text-blue-300 ml-2">Link to Mudex Music</a>
          </motion.li>
        </motion.ul>
      </motion.section>

      {/* Achievements Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-12 px-4 max-w-3xl mx-auto w-full transition-all duration-300 hover:scale-105"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold mb-6 border-b border-neutral-800 pb-2 transition-all duration-300 hover:text-blue-400"
        >
          Achievements
        </motion.h2>
        <motion.ul 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <motion.li 
            whileHover={{ scale: 1.02 }}
            className="bg-neutral-900 p-4 rounded-lg shadow border border-neutral-800 transition-all duration-300 hover:bg-blue-900 hover:shadow-lg"
          >
            <span className="font-bold">2025:</span> Invited at Indian Institute of Management Ahmedabad as a presenter with my team for our Disability aided A.I model application which could detect dyslexic handwriting and diagnose the user with dyslexia called the D.D App.
            <a href="https://www.linkedin.com/posts/nktrivedi01_technologyfordisability-dyslexiadetection-activity-7304796254499217409-GrtF?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADxn1gQBmAeFLxvBtDdkD5zKAahzZOvkupI" className="text-blue-400 hover:underline transition-all duration-300 hover:text-blue-300 ml-2" target="_blank" rel="noopener noreferrer">Link to IIM achievement</a>
            <a href="/certs/iim-cert.jpg" className="text-blue-400 hover:underline transition-all duration-300 hover:text-blue-300 ml-4" target="_blank" rel="noopener noreferrer">View Certificate</a>
          </motion.li>
        </motion.ul>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-12 px-4 max-w-3xl mx-auto w-full mb-12 transition-all duration-300 hover:scale-105"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold mb-6 border-b border-neutral-800 pb-2 transition-all duration-300 hover:text-blue-400"
        >
          Contact
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-2"
        >
          <a href="mailto:adityavaish846@gmail.com" className="text-blue-400 hover:underline transition-all duration-300 hover:text-blue-300">adityavaish846@gmail.com</a>
          <div className="flex gap-4 mt-2">
            <a href="https://www.linkedin.com/in/aditya-vaish-370494243/" className="hover:text-blue-400 transition-all duration-300">LinkedIn</a>
            <a href="https://github.com/vaishcodescape" className="hover:text-blue-400 transition-all duration-300">GitHub</a>
          </div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
