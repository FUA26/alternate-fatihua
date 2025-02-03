import React from 'react'
import Link from 'next/link'
import type { CoreContent } from '@/types/data'

import { Button } from '@/components/ui/button'
import ProjectCard from '@/components/common/project-card'
import type { Project } from '@/.contentlayer/generated'

interface FeaturedProjectSectionProps {
  initialDisplayProjects: CoreContent<Project>[]
}

function FeaturedProject({ initialDisplayProjects }: FeaturedProjectSectionProps) {
  return (
    <>
      <h2 className="py-4 text-4xl font-bold text-foreground">Featured Projects.</h2>
      <p className="text-justify text-base/relaxed text-foreground/70">
        Discover a handpicked showcase of my top projects, illustrating my tech expertise and
        passion.
      </p>
      {initialDisplayProjects.map((post, i) => {
        return <ProjectCard key={i} post={post} />
      })}
      <div className="text-center">
        <Link href="/project">
          <Button variant="outline" className="my-6">
            Explore More Projects
          </Button>
        </Link>
      </div>
    </>
  )
}

export default FeaturedProject
