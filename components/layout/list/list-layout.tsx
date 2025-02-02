'use client'

import type { Blog } from 'contentlayer/generated'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { PostCardGridView } from '@/components/content/post-card-grid-view'
import { SearchArticles } from '@/components/content/search-articles'
import { Container } from '@/components/ui/container'
import { Link } from '@/components/ui/link'
import { PageHeader } from '@/components/ui/page-header'
import type { CoreContent } from '@/types/data'
import { HighlightUnderline } from '@/components/ui/highlight-underline'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {prevPage ? (
          <Link
            className="cursor-pointer"
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            <HighlightUnderline className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Previous</span>
            </HighlightUnderline>
          </Link>
        ) : (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            <HighlightUnderline className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Previous</span>
            </HighlightUnderline>
          </button>
        )}
        <span>
          {currentPage} / {totalPages}
        </span>
        {nextPage ? (
          <Link className="cursor-pointer" href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            <HighlightUnderline className="inline-flex items-center gap-2">
              <span>Next</span>
              <ArrowRight className="h-4 w-4" />
            </HighlightUnderline>
          </Link>
        ) : (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            <HighlightUnderline className="inline-flex items-center gap-2">
              <span>Next</span>
              <ArrowRight className="h-4 w-4" />
            </HighlightUnderline>
          </button>
        )}
      </nav>
    </div>
  )
}

export function ListLayout({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((post) => {
    const searchContent = post.title + post.summary + post.tags?.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title={title}
        description="Dive into my collection of insightful articles and tutorials. Explore topics ranging from web development and software engineering to productivity tips and the latest trends in technology."
        className="border-b border-gray-200 dark:border-gray-700"
      >
        <SearchArticles label="Search articles" onChange={(e) => setSearchValue(e.target.value)} />
      </PageHeader>
      {!filteredBlogPosts.length ? (
        <div className="py-10">No posts found.</div>
      ) : (
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 py-10 md:gap-y-16 lg:grid-cols-2 xl:grid-cols-3">
          {displayPosts.map((post) => (
            <PostCardGridView key={post.path} post={post} />
          ))}
        </div>
      )}
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </Container>
  )
}
