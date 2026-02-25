import { ReactNode } from 'react'
import { cn } from '../cn'

export function SocialLink({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex gap-2 items-center group border p-2.5 font-lowres text-lg font-bold threeD hover:shadow-primary backdrop-blur-xs rounded',
        className,
      )}
    >
      {children}
    </div>
  )
}
