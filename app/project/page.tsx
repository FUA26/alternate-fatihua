import { allProjects } from 'contentlayer/generated'

import { Container } from '@/components/ui/container'
import { PageHeader } from '@/components/ui/page-header'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import ProjectCard from '@/components/common/project-card'

export default function BlogPage() {
  const posts = allCoreContent(sortPosts(allProjects))

  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="All Project"
        description="Explore my project portfolio. Get an overview of the works I have undertaken and my capabilities in various fields. "
        className="border-b border-gray-200 dark:border-gray-700"
      >
        {/* <SearchArticles
          label="Search articles"
          onChange={(e) => setSearchValue(e.target.value)}
        /> */}
      </PageHeader>
      {!posts.length ? (
        <div className="py-10">No posts found.</div>
      ) : (
        <div className="my-8 grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
          {posts.map((post) => (
            <ProjectCard key={post.path} post={post} />
          ))}
        </div>
      )}
    </Container>
  )
}
