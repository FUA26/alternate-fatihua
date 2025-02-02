import type { MDXComponents } from 'mdx/types'
import { Image, Zoom, type ImageProps } from '@/components/ui/image'
import { Link } from '@/components/ui/link'
import { CodeTitle } from './code-title'
import { Pre } from './pre'
import { TableWrapper } from './table-wrapper'
export const MDX_COMPONENTS: MDXComponents = {
  Image: ({ alt, ...rest }: ImageProps) => {
    return (
      <Zoom>
        <Image alt={alt} {...rest} />
      </Zoom>
    )
  },
  CodeTitle,
  a: Link,
  pre: Pre,
  table: TableWrapper,
}
