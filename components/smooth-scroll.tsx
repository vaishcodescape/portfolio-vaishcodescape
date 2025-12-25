"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const smootherRef = useRef<ScrollSmoother | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    // Create smooth scrolling effect with GSAP ScrollSmoother
    smootherRef.current = ScrollSmoother.create({
      smooth: 1.5, // Smoothness duration in seconds
      effects: true, // Enable data-speed effects
      smoothTouch: 0.1, // Smooth scrolling on touch devices
    })

    return () => {
      smootherRef.current?.kill()
    }
  }, [])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  )
}
