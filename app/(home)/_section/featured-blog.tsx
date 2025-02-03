import React from 'react'

import Link from 'next/link'
import { type CoreContent } from '@/types/data'
import { Button } from '@/components/ui/button'
import { PostCardGridView } from '@/components/common/post-card-grid-view'
import type { Blog } from '@/.contentlayer/generated'

interface FeaturedBlogSectionProps {
  initialDisplayBlogs: CoreContent<Blog>[]
}

function FeaturedBlog({ initialDisplayBlogs }: FeaturedBlogSectionProps) {
  return (
    <>
      <h2 className="py-4 text-4xl font-bold text-foreground">Featured Posts.</h2>
      <p className="text-justify text-base/relaxed text-foreground/70">
        Browse through my blog posts. Discover insights, stories, and knowledge that I share.
      </p>
      <div className="mt-4 grid grid-cols-1 gap-4 p-0 md:grid-cols-2 lg:grid-cols-3 lg:p-6">
        {initialDisplayBlogs.map((post, i) => {
          // return <BlogCard post={post} key={i} />;
          return <PostCardGridView key={post.path} post={post} />
        })}
      </div>
      <div className="text-center">
        <Link href="/blog">
          <Button variant="outline" className="my-6">
            Explore More Projects
          </Button>
        </Link>
      </div>
    </>
  )
}

export default FeaturedBlog
