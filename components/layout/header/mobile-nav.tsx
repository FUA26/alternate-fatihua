'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'

import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

import { Menu } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from '@/components/ui/link'
import { Logo } from './logo'
import { HEADER_NAV_LINKS } from 'configs/navigation'

export function MobileNav() {
  const [navShow, setNavShow] = useState(false)
  const navRef = useRef(null)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        enableBodyScroll(navRef.current)
      } else {
        // Prevent scrolling
        disableBodyScroll(navRef.current)
      }
      return !status
    })
  }

  useEffect(() => {
    return clearAllBodyScrollLocks
  })

  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={22} className="block sm:hidden" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
          <SheetDescription>
            <nav
              ref={navRef}
              className="pt- mt-4 flex h-full basis-0 flex-col items-start gap-4 overflow-y-auto pl-10"
            >
              {[...HEADER_NAV_LINKS].map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="py-1 text-xl font-bold tracking-widest text-gray-900 outline outline-0 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                  onClick={onToggleNav}
                >
                  <span className="ml-2">{link.title}</span>
                </Link>
              ))}
            </nav>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
