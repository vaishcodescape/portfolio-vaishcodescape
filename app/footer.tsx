"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!footerRef.current) return

    ScrollTrigger.create({
      trigger: footerRef.current,
      start: "top 90%",
      onEnter: () => {
        gsap.fromTo(
          footerRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          }
        )
      },
      once: true,
    })
  }, [])

  return (
    <footer
      ref={footerRef}
      className="mt-24 border-t border-border pt-8 pb-12"
    >
      <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
        <p>© 2025 Aditya Vaish. All rights reserved.</p>
        <p>Built with Next.js</p>
      </div>
    </footer>
  )
}
