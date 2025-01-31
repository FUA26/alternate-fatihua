'use client'

import { Link } from '@/components/ui/link'
import { Logo } from '../header/logo'
import siteMetadata from 'configs/siteMetadata'
import { HighlightUnderline } from '@/components/ui/highlight-underline'

export default function LogoAndRepo() {
  const siteRepo = siteMetadata.siteRepo.replace('https://github.com/', '')

  return (
    <div className="flex items-center">
      <Logo className="mr-4" />
      <Link href={siteMetadata.siteRepo} rel="noreferrer">
        <HighlightUnderline
          data-umami-event="footer-view-source"
          className="flex items-center gap-2 font-bold"
        >
          {siteMetadata.headerTitle}
        </HighlightUnderline>
      </Link>
    </div>
  )
}
