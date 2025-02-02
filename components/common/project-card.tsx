import Link from 'next/link'
import React from 'react'

import { Button } from '../ui/button'
import { Image } from '@/components/ui/image'

export default function ProjectCard({ post }) {
  return (
    <li className="my-8 flex flex-col items-center space-x-0 space-y-4 md:space-x-8 md:space-y-0 lg:space-x-12">
      <Link
        href={post.path}
        className="flex-end group flex h-64 w-full overflow-hidden rounded-lg bg-gray-100 hover:shadow-lg md:w-1/2 md:px-4 md:pt-12 lg:w-2/3"
      >
        {post?.images && (
          <div className="flex overflow-hidden transition duration-500 ease-in-out group-hover:scale-105">
            <Image
              src={post.structuredData.image}
              alt={post.title}
              width={768}
              height={384}
              style={{
                objectFit: 'cover',
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
      </Link>
      <div className="w-full md:w-1/2 lg:w-1/3">
        <span className="text-tertiary mb-1 block text-xs font-semibold uppercase tracking-widest">
          {post.category}
        </span>
        <h3 className="mb-1 text-2xl font-semibold text-foreground">{post.title}</h3>
        <span className="text-md text-tertiary mb-4 block">{post.desc}</span>
        <Link href={`/projects/${post.slug}`} className="w-fullmd:w-auto">
          <Button variant="outline">View Case Study</Button>
        </Link>
      </div>
    </li>
  )
}
