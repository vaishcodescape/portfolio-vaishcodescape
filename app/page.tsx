'use client'
import { useLayoutEffect, useRef } from 'react'
import type React from 'react'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  ACHIEVEMENTS,
  TECH_STACK,
  EMAIL,
  SOCIAL_LINKS,
} from './data'

gsap.registerPlugin(ScrollTrigger)

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  const isVideo = src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.mov')

  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        {isVideo ? (
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video w-full cursor-zoom-in rounded-xl"
          />
        ) : (
          <Image
            src={src}
            alt="Project preview"
            width={800}
            height={450}
            className="aspect-video w-full cursor-zoom-in rounded-xl object-cover"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        )}
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          {isVideo ? (
            <video
              src={src}
              autoPlay
              loop
              muted
              className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
            />
          ) : (
            <Image
              src={src}
              alt="Project preview"
              width={1200}
              height={675}
              className="aspect-video h-[50vh] w-full rounded-xl object-cover md:h-[70vh]"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          )}
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  const mainRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    if (!mainRef.current) return

    const ctx = gsap.context(() => {
      // Hero text with word-by-word reveal
      const heroText = mainRef.current?.querySelector('.hero-text')
      if (heroText) {
        gsap.from(heroText, {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
          delay: 0.2,
        })
      }

      // Section titles slide in from left
      gsap.utils.toArray<HTMLElement>('.section-title').forEach((title) => {
        gsap.from(title, {
          x: -50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 85%',
          },
        })
      })

      // Project cards with 3D hover effect
      gsap.utils.toArray<HTMLElement>('.project-card').forEach((card, index) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          scale: 0.9,
          rotateX: 45,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
          },
          delay: index * 0.1,
        })

        // Add parallax effect to project cards
        gsap.to(card, {
          y: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        })
      })

      // Tech stack categories with stagger
      gsap.utils.toArray<HTMLElement>('.tech-category').forEach((category, index) => {
        gsap.from(category, {
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: category,
            start: 'top 85%',
          },
        })
      })

      // Tech chips pop in with elastic animation
      gsap.utils.toArray<HTMLElement>('.tech-chip').forEach((chip, index) => {
        gsap.from(chip, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: chip,
            start: 'top 90%',
          },
          delay: index * 0.02,
        })
      })

      // Work experience cards with slide and glow effect
      gsap.utils.toArray<HTMLElement>('.work-card').forEach((card, index) => {
        gsap.from(card, {
          x: 100,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          delay: index * 0.15,
        })
      })

      // Achievement items fade in sequence
      gsap.utils.toArray<HTMLElement>('.achievement-item').forEach((item, index) => {
        gsap.from(item, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
          },
          delay: index * 0.08,
        })
      })

      // Social links bounce in
      gsap.utils.toArray<HTMLElement>('.social-link').forEach((link, index) => {
        gsap.from(link, {
          y: 50,
          opacity: 0,
          scale: 0.5,
          duration: 0.6,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: link,
            start: 'top 90%',
          },
          delay: index * 0.1,
        })
      })

      // Resume button with magnetic pull effect
      const resumeBtn = mainRef.current?.querySelector('.resume-btn')
      if (resumeBtn) {
        gsap.from(resumeBtn, {
          scale: 0,
          opacity: 0,
          duration: 0.8,
          ease: 'elastic.out(1, 0.6)',
          scrollTrigger: {
            trigger: resumeBtn,
            start: 'top 90%',
          },
        })
      }
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <motion.main
      ref={mainRef}
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <div className="flex-1">
          <p className="hero-text text-zinc-600 dark:text-zinc-400">
            Hi, I'm Aditya. I'm a Full Stack Developer passionate about building scalable software 
            and integrating AI/ML with DevOps. 
            Currently pursuing my undergrad in ICT at Dhirubhai Ambani University (formerly DA-IICT), 
            I love contributing to open source and tinkering with new technologies. I'm always looking for new challenges, 
            especially in building SaaS products with the potential to create a lasting impact.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h3 className="section-title text-lg font-medium">Selected Projects</h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Showcasing my latest work
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <article key={project.name} className="group project-card h-full">
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-zinc-50/40 p-6 ring-1 ring-zinc-200/50 ring-inset transition-all duration-300 hover:ring-zinc-300/70 hover:shadow-lg dark:bg-zinc-950/40 dark:ring-zinc-800/50 dark:hover:ring-zinc-700/70">
                <div className="flex flex-col space-y-3 h-full">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                      {project.name}
                    </h4>
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg bg-zinc-100 p-2 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
                          aria-label="View on GitHub"
                        >
                          <svg
                            className="h-4 w-4 text-zinc-700 dark:text-zinc-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-zinc-900 p-2 transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200"
                        aria-label="View project"
                      >
                        <svg
                          className="h-4 w-4 text-white dark:text-zinc-900"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 flex-grow">
                    {project.description}
                  </p>
                  
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1 mt-auto">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-200 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:bg-zinc-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="section-title mb-5 text-lg font-medium">Tech Stack</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {TECH_STACK.map((category, index) => (
            <div
              key={index}
              className="tech-category rounded-2xl bg-zinc-50/40 p-4 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50"
            >
              <h4 className="mb-3 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {category.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="tech-chip inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="section-title mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <a
              className="work-card relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="section-title mb-3 text-lg font-medium">Achievements</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {ACHIEVEMENTS.map((achievement) => (
              <div
                key={achievement.uid}
                className="achievement-item -mx-3 rounded-xl px-3 py-3"
                data-id={achievement.uid}
              >
                <div className="flex flex-col space-y-1">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-normal dark:text-zinc-100">
                      {achievement.title}
                    </h4>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
                      {achievement.date}
                    </span>
                  </div>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="section-title mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <div key={link.label} className="social-link">
              <MagneticSocialLink link={link.link}>
                {link.label}
              </MagneticSocialLink>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="flex justify-center pb-12"
      >
        <div className="resume-btn">
          <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
            <a
              href="/Aditya_Vaish_Resume.pdf"
              download="Aditya_Vaish_Resume.pdf"
              className="group relative inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-base font-medium text-white transition-all duration-200 hover:bg-zinc-800 hover:shadow-lg dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
              Download Resume
            </a>
          </Magnetic>
        </div>
      </motion.section>
    </motion.main>
  )
}

