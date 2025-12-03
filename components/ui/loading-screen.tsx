"use client"

import * as React from "react"
import { Progress } from "./progress"

export function LoadingScreen() {
  const [progress, setProgress] = React.useState(0)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + 10
      })
    }, 200)

    return () => clearInterval(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-zinc-950">
      <div className="w-full max-w-md px-8">
        <h1 className="mb-8 text-center text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          vaishfolio loading
          <span className="dots-animation">
            <span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </span>
        </h1>
        <Progress value={progress} className="h-2" />
      </div>
      <style jsx>{`
        .dots-animation {
          display: inline-block;
        }
        .dot {
          animation: blink 1.4s infinite both;
          display: inline-block;
        }
        .dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        .dot:nth-child(3) {
          animation-delay: 0.4s;
        }
        @keyframes blink {
          0%, 80%, 100% {
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

