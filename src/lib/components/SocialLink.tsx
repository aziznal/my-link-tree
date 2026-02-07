import { ReactNode } from 'react'
import { cn } from '../cn'
import { Link } from '@tanstack/react-router'

type SocialLinkProps = {
  href: string
  children: ReactNode
  className?: string
}

export default function SocialLink({
  href,
  children,
  className,
}: SocialLinkProps) {
  return (
    <Link
      to={href}
      target="_blank"
      className={cn(
        'flex gap-2 items-center group border p-2 rounded-lg border-zinc-700 hover:bg-zinc-800/60 text-sm',
        className,
      )}
    >
      {children}
    </Link>
  )
}
