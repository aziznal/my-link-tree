import { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { LucideImage } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export function ProjectLink({
  imageSrc,
  description,
  children,
  href,
  className,
}: {
  children: ReactNode
  description: string
  href: string
  className?: string
  imageSrc?: string
}) {
  return (
    <Link
      target="_blank"
      to={href}
      className={cn('flex flex-col rounded border h-full', className)}
    >
      <div className="shrink-0 h-[250px] border-b rounded-t-lg flex items-center justify-center">
        {!imageSrc && <LucideImage className="text-muted" size="36" />}

        {imageSrc && (
          <img
            src={imageSrc}
            alt={description}
            width={180}
            height={180}
            className="rounded-t-lg object-cover w-full h-full"
            decoding="async"
            fetchPriority="high"
          />
        )}
      </div>

      <div className="flex flex-col gap-3 p-8">
        <span className="text-2xl text-center text-balance font-bold uppercase font-lowres text-shadow-lg text-shadow-foreground/20">{children}</span>

        <p className="text-center text-balance">{description}</p>
      </div>
    </Link>
  )
}
