import { ReactNode } from 'react'
import { Link } from '@tanstack/react-router'
import { cn } from '../cn'

export function SocialLink({
  href,
  children,
  className,
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <Link
      to={href}
      target="_blank"
      className={cn(
        'flex gap-2 items-center group border p-2.5 rounded-lg font-lowres text-lg font-bold threeD shadow-primary/50 hover:shadow-primary backdrop-blur-xs',
        className,
      )}
    >
      {children}
    </Link>
  )
}
