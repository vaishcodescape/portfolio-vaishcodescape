"use client"
import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { PROJECTS, WORK_EXPERIENCE, ACHIEVEMENTS, TECH_STACK, EMAIL, SOCIAL_LINKS } from "./data"
import Image from "next/image"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Home() {
  return (
    <motion.main variants={container} initial="hidden" animate="show" className="space-y-24">
      {/* Hero Section */}
      <motion.section variants={item} className="space-y-6">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4 flex-1">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">Full Stack Developer</p>
            <h2 className="text-4xl font-medium leading-tight tracking-tight text-foreground md:text-5xl">
              Building polished software and web experiences.
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative h-32 w-32 shrink-0 md:h-40 md:w-40"
          >
            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-border">
              <Image src="/profile_pic.jpeg" alt="Aditya Vaishampayan" fill className="object-cover" priority />
            </div>
          </motion.div>
        </div>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          I'm a Full Stack Developer passionate about building scalable software and integrating AI/ML with DevOps.
          Currently pursuing my undergrad in ICT at Dhirubhai Ambani University, I love contributing to open source and
          tinkering with new technologies.
        </p>
      </motion.section>

      {/* About Section */}
      <motion.section variants={item} className="space-y-6">
        <h3 className="text-sm uppercase tracking-wider text-muted-foreground">About</h3>
        <div className="space-y-4 text-base leading-relaxed text-foreground">
          <p>
            I'm always looking for new challenges, especially in building SaaS products with the potential to create a
            lasting impact. My work spans full-stack development, cloud infrastructure, and machine learning
            integration.
          </p>
          <p>
            In the past, I've had the opportunity to develop software across a variety of settings — from advertising
            agencies and large corporations to start-ups and small digital product studios.
          </p>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section variants={item} className="space-y-8">
        <h3 className="text-sm uppercase tracking-wider text-muted-foreground">Experience</h3>
        <div className="space-y-12">
          {WORK_EXPERIENCE.map((job, index) => (
            <motion.a
              key={job.id}
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                      {job.title}
                    </h4>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <p className="text-muted-foreground">{job.company}</p>
                </div>
                <p className="text-sm text-muted-foreground md:text-right whitespace-nowrap">
                  {job.start} — {job.end}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section variants={item} className="space-y-8">
        <h3 className="text-sm uppercase tracking-wider text-muted-foreground">Projects</h3>
        <div className="grid gap-6 md:grid-cols-2 md:auto-rows-fr">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.name}
              className="group relative h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col space-y-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                    {project.name}
                  </h4>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground flex-grow">{project.description}</p>
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Tech Stack Section */}
      <motion.section variants={item} className="space-y-8">
        <h3 className="text-sm uppercase tracking-wider text-muted-foreground">Tech Stack</h3>
        <div className="grid gap-8 md:grid-cols-2 md:auto-rows-fr">
          {TECH_STACK.map((category, index) => (
            <motion.div
              key={category.category}
              className="space-y-3"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="text-sm font-medium text-foreground">{category.category}</h4>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <span key={tech} className="rounded-md bg-secondary px-3 py-1.5 text-sm text-secondary-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section variants={item} className="space-y-8">
        <h3 className="text-sm uppercase tracking-wider text-muted-foreground">Achievements</h3>
        <div className="space-y-6">
          {ACHIEVEMENTS.map((achievement, index) => (
            <motion.div
              key={achievement.uid}
              className="space-y-2 border-l-2 border-border pl-4 transition-colors hover:border-accent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                <h4 className="font-medium text-foreground">{achievement.title}</h4>
                <span className="text-sm text-muted-foreground whitespace-nowrap">{achievement.date}</span>
              </div>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section variants={item} className="space-y-8">
        <h3 className="text-sm uppercase tracking-wider text-muted-foreground">Connect</h3>
        <div className="space-y-6">
          <p className="text-base text-foreground">
            Feel free to contact me at{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
            >
              {EMAIL}
            </a>
          </p>
          <div className="flex flex-wrap gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-accent/50 hover:text-accent"
              >
                {link.label}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Resume Download */}
      <motion.section variants={item} className="flex justify-center pb-12">
        <a
          href="/resume/Aditya_US_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-medium text-accent-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105"
        >
          Download Resume
          <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </motion.section>
    </motion.main>
  )
}
