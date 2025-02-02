import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { CreateAppAnimation } from '@/components/animation/animations'
import { buttonVariants } from '@/components/ui/button'
import { HighlightUnderline } from '@/components/ui/highlight-underline'

function HeroSection() {
  return (
    <div className="bg-fd-background container relative z-[2] flex h-[calc(100vh-64px)] flex-col justify-center overflow-hidden px-2 pb-16 pt-12 max-md:text-center md:px-4 md:pt-0">
      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="flex-1">
          <div className="mb-3 flex">
            <div className="inline-flex items-center gap-1 rounded-[100px] bg-[#F4F5F6] p-1 pr-[10px]">
              <div className="inline-block rounded-[100px] bg-primary p-2 text-[10px] font-semibold text-white">
                New
              </div>
              <p className="text-sm text-[#31373D]">BandaNaiera Project</p>
              <div>
                <ChevronRight />
              </div>
            </div>
          </div>
          <h1 className="my-4 mb-4 max-w-[600px] text-4xl font-semibold lg:text-6xl">
            Hi, I&apos;m Fatih UA
          </h1>
          <p className="text-fd-muted-foreground mb-8 md:max-w-[80%] md:text-xl">
            Experienced and versatile Software Engineer turning{' '}
            <HighlightUnderline active={true} className="font-semibold">
              ideas{' '}
            </HighlightUnderline>{' '}
            into <span className="font-bold text-primary-500">impactful solutions </span> through
            the power of code.
          </p>
          <div className="mb-4 inline-flex items-center gap-3 max-md:mx-auto">
            <Link
              href="/docs/ui"
              className={cn(buttonVariants({ size: 'lg', className: 'rounded-full' }))}
            >
              More About Me
            </Link>
            <a
              href="https://githubbox.com/fuma-nama/fumadocs-ui-template"
              className={cn(
                buttonVariants({
                  size: 'lg',
                  variant: 'outline',
                  className: 'bg-fd-background rounded-full',
                })
              )}
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="flex-1">
          <CreateAppAnimation />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
