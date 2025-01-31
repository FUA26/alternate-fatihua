import { clsx } from 'clsx'
export default function FooterBottom() {
  return (
    <div
      className={clsx([
        'pt-5 md:my-2',
        'flex items-center justify-center gap-4 md:flex-row md:gap-16',
        'border-t border-gray-200 dark:border-gray-700',
      ])}
    >
      <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
        Copyright © 2025 Fatih Ulil Albab. All rights reserved.
      </span>
    </div>
  )
}
