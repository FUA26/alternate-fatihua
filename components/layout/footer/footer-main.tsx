import { clsx } from 'clsx'
import { Container } from '@/components/ui/container'
import LogoAndRepo from './logo-and-repo'
import { FooterNav } from './footer-nav'
import FooterBottom from './footer-bottom'
import siteMetadata from 'configs/siteMetadata'
import SocialMedia from '@/components/ui/social-media'

export function Footer() {
  return (
    <Container as="footer" className="mb-4 mt-8 md:mt-16">
      <div
        className={clsx([
          'grid grid-cols-1 gap-x-8 gap-y-8 py-8 md:grid-cols-2 xl:grid-cols-3',
          'border-t border-gray-200 dark:border-gray-700',
        ])}
      >
        <div className="col-span-1 space-y-4 xl:col-span-2">
          <LogoAndRepo />
          <div className="italic text-gray-500 dark:text-gray-400">{siteMetadata.description}</div>
          <div className="pt-2">
            <div className="flex gap-8 md:gap-20">
              <div className="flex items-center">
                {/* <Signature className="h-20 w-32 md:w-40" /> */}
                <SocialMedia />
              </div>
              {/* <FooterMeta /> */}
            </div>
          </div>
        </div>
        <FooterNav />
      </div>
      <FooterBottom />
    </Container>
  )
}
