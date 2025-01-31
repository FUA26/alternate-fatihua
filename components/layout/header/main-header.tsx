'use client'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { Container } from '@/components/ui/container'
import { HighlightUnderline } from '@/components/ui/highlight-underline'
import { Link } from '@/components/ui/link'

import { Logo } from './logo'
import { MobileNav } from './mobile-nav'
import { ToggleTheme } from './toggle-theme'
import siteMetadata from 'configs/siteMetadata'
import { HEADER_NAV_LINKS } from 'configs/navigation'

export function Header() {
  const pathname = usePathname()

  return (
    <Container
      as="header"
      className={clsx(
        'bg-white/75 py-2 backdrop-blur dark:bg-gray-950',
        'z-10 shadow-sm saturate-100 lg:rounded-2xl',
        siteMetadata.stickyNav && 'sticky top-0'
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <Logo />
        <div className="flex items-center gap-4">
          <div className="hidden gap-1.5 sm:flex">
            {HEADER_NAV_LINKS.map(({ title, href }) => {
              const isActive = pathname.startsWith(href)
              return (
                <Link key={title} href={href} className="px-3 py-1 font-medium">
                  <HighlightUnderline
                    className={clsx(isActive && 'bg-[length:100%_50%]')}
                    data-umami-event={`nav-${href.replace('/', '')}`}
                  >
                    {title}
                  </HighlightUnderline>
                </Link>
              )
            })}
            {/* <MoreLinks /> */}
          </div>
          <div
            data-orientation="vertical"
            role="separator"
            className="hidden h-4 w-px shrink-0 bg-gray-200 dark:bg-gray-600 md:block"
          />
          <div className="flex items-center gap-2">
            <ToggleTheme />
            <MobileNav />
          </div>
        </div>
      </div>
    </Container>
  )
}
