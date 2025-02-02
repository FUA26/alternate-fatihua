import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import HeroSection from './_section/hero-section'
import { allBlogs, allProjects } from 'contentlayer/generated'
import FeaturedBlog from './_section/featured-blog'
import FeaturedProject from './_section/featured-project'

export default function Home() {
  const initialDisplayBlogs = allCoreContent(sortPosts(allBlogs)).slice(0, 6)
  const initialDisplayProjects = allCoreContent(sortPosts(allProjects)).slice(0, 3)
  return (
    <>
      <HeroSection />
      <FeaturedProject initialDisplayProjects={initialDisplayProjects} />
      <FeaturedBlog initialDisplayBlogs={initialDisplayBlogs} />
    </>
  )
}
