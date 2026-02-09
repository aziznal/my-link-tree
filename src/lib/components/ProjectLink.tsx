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
        'group flex rounded h-full gap-6 threeD backdrop-blur-sm transition-all shadow-accent/30 border items-center',
        className,
      )}
    >
      <div className="shrink-0 h-[150px] w-[150px] rounded-l flex">
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

      <div className="flex flex-col gap-3 -mt-2">
        <span className="text-2xl text-balance uppercase font-lowres text-glow-sm text-shadow-accent group-hover:text-glow group-hover:text-shadow-accent duration-300">
          {children}
        </span>

        <p className="text-balance text-muted-foreground text-sm">{description}</p>
      </div>
    </Link>
  )
}
