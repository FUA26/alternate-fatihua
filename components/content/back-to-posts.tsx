import { MoveLeft } from 'lucide-react'

import { Link } from '@/components/ui/link'
import { HighlightUnderline } from '../ui/highlight-underline'

export function BackToPosts({ label, className }: { label: string; className?: string }) {
  return (
    <div className={className}>
      <Link href="/blog" className="flex w-fit items-center gap-3 font-medium">
        <MoveLeft strokeWidth={1.5} />
        <HighlightUnderline>{label}</HighlightUnderline>
      </Link>
    </div>
  )
}
