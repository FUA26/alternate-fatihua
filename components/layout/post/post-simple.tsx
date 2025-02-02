import type { Blog } from 'contentlayer/generated'
import type { ReactNode } from 'react'
import { PostTitle } from '@/components/content/post-title'
import { ScrollButtons } from '@/components/content/scroll-buttons'
import { TagsList } from '@/components/content/tags'
import { Container } from '@/components/ui/container'
import { GradientDivider } from '@/components/ui/gradient-divider'

import type { CoreContent } from '@/types/data'
import siteMetadata from 'configs/siteMetadata'

interface PostSimpleProps {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export function PostSimple({ content, children }: PostSimpleProps) {
  const { slug, date, lastmod, title, type, tags, readingTime, filePath } = content
  const postUrl = `${siteMetadata.siteUrl}/${type.toLowerCase()}/${slug}`

  return (
    <Container className="pt-4 lg:pt-12">
      <ScrollButtons />
      <article className="space-y-6 pt-6 lg:space-y-12">
        <div className="space-y-4">
          <TagsList tags={tags} />
          <PostTitle>{title}</PostTitle>
          <dl>
            <div>
              <dt className="sr-only">Published on</dt>
              {/* <BlogMeta
                date={date}
                lastmod={lastmod}
                type={type.toLowerCase() as StatsType}
                slug={slug}
                readingTime={readingTime}
              /> */}
            </div>
          </dl>
        </div>
        <GradientDivider />
        <div className="prose prose-lg max-w-none dark:prose-invert">{children}</div>
        <GradientDivider className="mb-2 mt-1" />
        <div className="space-y-8">
          {/* <div className="flex justify-between gap-4">
            <div className="flex items-center gap-2">
              <DiscussOnX postUrl={postUrl} />
              <span className="text-gray-500">/</span>
              <EditOnGithub filePath={filePath} />
            </div>
            <SocialShare postUrl={postUrl} filePath={filePath} title={title} />
          </div> */}
          {/* <Comments /> */}
        </div>
      </article>
    </Container>
  )
}
