"use client"
import { motion } from "motion/react"

export function Footer() {
  return (
    <motion.footer
      className="mt-24 border-t border-border pt-8 pb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
        <p>© 2025 Aditya Vaish. All rights reserved.</p>
        <p>Built with Next.js</p>
      </div>
    </motion.footer>
  )
}
