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
      className={cn(
        'group flex rounded-xs h-full gap-6 threeD backdrop-blur-sm transition-all hover:shadow-primary border items-center min-h-[150px]',
        className,
      )}
    >
      <div className="shrink-0 h-full w-[150px] rounded-l-xs flex">
        {!imageSrc && <LucideImage className="text-muted" size="36" />}

        {imageSrc && (
          <img
            src={imageSrc}
            alt={description}
            width={180}
            height={180}
            className="rounded-l-xs object-cover w-full h-full"
            decoding="async"
            fetchPriority="high"
          />
        )}
      </div>

      <div className="flex flex-col gap-3 -mt-2 py-4">
        <span className="text-2xl text-balance font-lowres text-glow-sm group-hover:text-glow group-hover:text-shadow-primary duration-300">
          {children}
        </span>

        <p className="text-balance text-muted-foreground text-sm">
          {description}
        </p>
      </div>
    </Link>
  )
}
