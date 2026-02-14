import { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { LucideExternalLink, LucideImage } from 'lucide-react'
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
      className={cn(
        'group flex flex-col rounded h-full threeD backdrop-blur-sm bg-primary/10 hover:shadow-primary border items-center',
        className,
      )}
    >
      <div className="shrink-0 h-[150px] w-full rounded-l flex">
        {!imageSrc && <LucideImage className="text-muted" size="36" />}

        {imageSrc && (
          <img
            src={imageSrc}
            alt={description}
            width={180}
            height={180}
            className="rounded-l object-cover w-full h-full"
            decoding="async"
            fetchPriority="high"
          />
        )}
      </div>

      <div className="flex flex-col gap-3 p-3 h-full justify-between">
        <div className="flex flex-col gap-3">
          <span className="text-2xl text-balance font-lowres text-glow-sm group-hover:text-shadow-primary duration-300 font-bold">
            {children}
          </span>

          <p className="text-balance text-muted-foreground text-sm">
            {description}
          </p>
        </div>

        <LucideExternalLink className="shrink-0 self-end justify-self-end" />
      </div>
    </Link>
  )
}
