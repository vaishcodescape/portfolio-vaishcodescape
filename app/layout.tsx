import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "./header"
import { Footer } from "./footer"
import { ThemeProvider } from "next-themes"
import { SmoothScroll } from "@/components/smooth-scroll"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2d3748",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://vaishcodescape.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Aditya Vaish - Software Developer",
    template: "%s | Aditya Vaish",
  },
  description:
    "Software Developer specializing in full-stack development, AI integration, and scalable web applications. Implementing DevOps practices to build scalable and efficient applications.",
    generator: 'v0.app'
}

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans bg-background text-foreground tracking-tight antialiased`}
      >
        <ThemeProvider enableSystem={true} attribute="class" storageKey="theme" defaultTheme="dark">
          <SmoothScroll>
            <div className="relative min-h-screen w-full">
              <div className="relative mx-auto w-full max-w-3xl px-6 py-16 md:py-24">
                <Header />
                {children}
                <Footer />
              </div>
            </div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}
