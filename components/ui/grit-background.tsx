import { clsx } from 'clsx'
import React from 'react'

export function GritBackground({ className }: { className?: string }) {
  return (
    <div
      className={clsx([
        'absolute z-[-1]',
        'bg-cover bg-center',
        '[background-image:url("/static/images/black-grit.png")]',
        'dark:[background-image:url("/static/images/white-grit.png")]',
        className,
      ])}
    />
  )
}
