'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src="/profile_pic.jpeg"
          alt="Aditya Vaish"
          width={128}
          height={128}
          className="rounded-full ring-2 ring-zinc-200 dark:ring-zinc-800"
          priority
        />
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Aditya Vaish
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Software Developer
          </TextEffect>
        </div>
      </div>
    </header>
  )
}

