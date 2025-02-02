'use client'

import {
  useEffect,
  useState,
  Fragment,
  type ReactElement,
  type HTMLAttributes,
  type ReactNode,
  type HTMLProps,
} from 'react'
import { TerminalIcon } from 'lucide-react'
import Link from 'next/link'
import scrollIntoView from 'scroll-into-view-if-needed'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

export function CreateAppAnimation() {
  const installCmd = 'fua create magic-app'
  const tickTime = 100
  const timeCommandEnter = installCmd.length
  const timeCommandRun = timeCommandEnter + 3
  const timeCommandEnd = timeCommandRun + 3
  const timeWindowOpen = timeCommandEnd + 1
  const timeEnd = timeWindowOpen + 1

  const [tick, setTick] = useState(timeEnd)

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prev) => (prev >= timeEnd ? prev : prev + 1))
    }, tickTime)

    return () => {
      clearInterval(timer)
    }
  }, [timeEnd])

  const lines: ReactElement[] = []

  lines.push(
    <span key="command_type">
      {installCmd.substring(0, tick)}
      {tick < timeCommandEnter && <div className="inline-block h-3 w-1 animate-pulse bg-white" />}
    </span>
  )

  if (tick >= timeCommandEnter) {
    lines.push(<span key="space"> </span>)
  }

  if (tick > timeCommandRun)
    lines.push(
      <Fragment key="command_response">
        <span className="font-bold">┌ Create Impactful Solutions 🪄</span>
        <span>│</span>
        {tick > timeCommandRun + 1 && (
          <>
            {/* <span className="font-bold">◇ Project name</span> */}
            <span>│ ○ add Passion 🤩</span>
            <span>│</span>
          </>
        )}
        {tick > timeCommandRun + 2 && (
          <>
            <span>│ ○ add Innovation 🧠</span>
            <span>│</span>
            {/* <span className="font-bold">◆ Choose a content source</span> */}
          </>
        )}
        {tick > timeCommandRun + 3 && (
          <>
            {/* <span>│ ● Fumadocs MDX</span> */}
            <span>│ ○ add Efficiency 🌟</span>
            <span>│</span>
          </>
        )}
      </Fragment>
    )

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        if (tick >= timeEnd) {
          setTick(0)
        }
      }}
    >
      {tick > timeWindowOpen && (
        <LaunchAppWindow className="absolute bottom-5 right-4 z-10 w-1/2 animate-in fade-in slide-in-from-top-10" />
      )}
      <pre className="overflow-hidden rounded-xl border text-xs">
        <div className="flex flex-row items-center justify-between gap-2 border-b bg-gray-200 px-4 py-2 dark:text-black">
          {/* <div className="grow" /> */}
          <div className="flex gap-1">
            <div className="size-2 rounded-full bg-gray-400" />
            <div className="size-2 rounded-full bg-green-400" />
            <div className="size-2 rounded-full bg-red-400" />
          </div>
          <div className="flex">
            <TerminalIcon className="size-4" /> <span className="font-bold">Terminal</span>
          </div>
          <div className="w-12"></div>
        </div>
        <div className="from-fd-secondary min-h-[200px] bg-gradient-to-b text-left [mask-image:linear-gradient(to_bottom,white,transparent)]">
          <code className="grid p-4">{lines}</code>
        </div>
      </pre>
    </div>
  )
}

function LaunchAppWindow(props: HTMLAttributes<HTMLDivElement>): React.ReactElement {
  return (
    <div
      {...props}
      className={cn('overflow-hidden rounded-md border bg-background shadow-xl', props.className)}
    >
      <div className="relative flex h-6 flex-row items-center border-b bg-gray-200 px-4 text-xs dark:text-black">
        {/* <p className="absolute inset-x-0 text-center">localhost:3000</p>
         */}
        <div className="flex gap-1">
          <div className="size-2 rounded-full bg-gray-400" />
          <div className="size-2 rounded-full bg-green-400" />
          <div className="size-2 rounded-full bg-red-400" />
        </div>
        <div className="w-12"></div>
      </div>
      <div className="flex flex-col items-center p-4 text-sm">
        <span className="text-2xl">🎉</span>
        <h1 className="font-semibold">The Magic Happens!</h1>
      </div>
    </div>
  )
}
