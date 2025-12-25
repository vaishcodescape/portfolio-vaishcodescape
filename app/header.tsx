"use client"
import Link from "next/link"
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState, useRef } from "react"
import { gsap } from "gsap"

const THEMES_OPTIONS = [
  {
    label: "Light",
    id: "light",
    icon: <SunIcon className="h-4 w-4" />,
  },
  {
    label: "Dark",
    id: "dark",
    icon: <MoonIcon className="h-4 w-4" />,
  },
  {
    label: "System",
    id: "system",
    icon: <MonitorIcon className="h-4 w-4" />,
  },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const indicatorRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLButtonElement[]>([])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !indicatorRef.current) return

    // Find active button index
    const activeIndex = THEMES_OPTIONS.findIndex((opt) => opt.id === theme)
    if (activeIndex === -1) return

    const activeButton = buttonsRef.current[activeIndex]
    if (!activeButton) return

    // Calculate position based on button index (each button is 28px wide + 4px gap)
    const buttonWidth = 28
    const gap = 4
    const padding = 4
    const newLeft = padding + activeIndex * (buttonWidth + gap)

    gsap.to(indicatorRef.current, {
      left: newLeft,
      duration: 0.3,
      ease: "power2.out",
    })
  }, [theme, mounted])

  // Hover effects for buttons
  useEffect(() => {
    if (!mounted) return

    const cleanupFunctions: Array<() => void> = []

    buttonsRef.current.forEach((button) => {
      if (!button) return

      const handleMouseEnter = () => {
        gsap.to(button, {
          scale: 1.1,
          duration: 0.2,
          ease: "power2.out",
        })
      }

      const handleMouseLeave = () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
        })
      }

      button.addEventListener("mouseenter", handleMouseEnter)
      button.addEventListener("mouseleave", handleMouseLeave)

      cleanupFunctions.push(() => {
        button.removeEventListener("mouseenter", handleMouseEnter)
        button.removeEventListener("mouseleave", handleMouseLeave)
      })
    })

    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup())
    }
  }, [mounted])

  if (!mounted) {
    return null
  }

  // Initialize indicator position
  const activeIndex = THEMES_OPTIONS.findIndex((opt) => opt.id === theme)
  const initialLeft = activeIndex === 0 ? 4 : activeIndex === 1 ? 36 : 68

  return (
    <div className="relative flex items-center gap-1 rounded-lg border border-border bg-card p-1">
      {THEMES_OPTIONS.map((themeOption, index) => {
        const isActive = theme === themeOption.id
        return (
          <button
            key={themeOption.id}
            ref={(el) => {
              if (el) buttonsRef.current[index] = el
            }}
            className={`relative inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors duration-200 hover:text-foreground ${
              isActive ? "text-foreground" : ""
            }`}
            type="button"
            aria-label={`Switch to ${themeOption.label} theme`}
            onClick={() => setTheme(themeOption.id)}
          >
            <span className="relative z-10">{themeOption.icon}</span>
          </button>
        )
      })}
      <div
        ref={indicatorRef}
        className="absolute rounded-md bg-secondary"
        style={{
          left: `${initialLeft}px`,
          top: "4px",
          width: "28px",
          height: "28px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
    </div>
  )
}

export function Header() {
  const headerRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!headerRef.current) return

    // Header fade-in animation
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      }
    )

    // Logo hover animation
    if (logoRef.current) {
      const logo = logoRef.current.querySelector("h1")
      if (logo) {
        logo.addEventListener("mouseenter", () => {
          gsap.to(logo, {
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out",
          })
        })

        logo.addEventListener("mouseleave", () => {
          gsap.to(logo, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          })
        })
      }
    }
  }, [])

  return (
    <header ref={headerRef} className="mb-16 flex items-center justify-between">
      <Link ref={logoRef} href="/" className="group">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Aditya Vaish
        </h1>
      </Link>
      <ThemeSwitch />
    </header>
  )
}
