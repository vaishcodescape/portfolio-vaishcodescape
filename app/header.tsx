"use client"
import { motion } from "motion/react"
import Link from "next/link"
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

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

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex items-center gap-1 rounded-lg border border-border bg-card p-1">
      {THEMES_OPTIONS.map((themeOption) => {
        const isActive = theme === themeOption.id
        return (
          <button
            key={themeOption.id}
            className={`relative inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors duration-200 hover:text-foreground ${
              isActive ? "text-foreground" : ""
            }`}
            type="button"
            aria-label={`Switch to ${themeOption.label} theme`}
            onClick={() => setTheme(themeOption.id)}
          >
            {isActive && (
              <motion.div
                layoutId="theme-indicator"
                className="absolute inset-0 rounded-md bg-secondary"
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}
            <span className="relative z-10">{themeOption.icon}</span>
          </button>
        )
      })}
    </div>
  )
}

export function Header() {
  return (
    <motion.header
      className="mb-16 flex items-center justify-between"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className="group">
        <motion.h1
          className="text-2xl font-semibold tracking-tight text-foreground"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Aditya Vaish
        </motion.h1>
      </Link>
      <ThemeSwitch />
    </motion.header>
  )
}
