import { ReactNode, useId } from 'react'
import { cn } from '@/lib/cn'
import { LucideExternalLink, LucideImage } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export function ProjectLink({
  imageSrc,
  description,
  children,
  href,
  className,
  techTags = [],
}: {
  children: ReactNode
  description: string
  href: string
  className?: string
  imageSrc?: string
  techTags?: string[]
}) {
  const id = useId()

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
          <span className="text-2xl text-balance font-lowres text-glow-sm duration-300 font-bold">
            {children}
          </span>

          <p className="text-balance text-muted-foreground text-sm">
            {description}
          </p>

          {techTags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-4">
              {techTags.map((tag) => (
                <div
                  key={`${id}-${tag}`}
                  className={cn(
                    'text-[8px] px-1.5 py-0.5 border w-fit rounded-full font-bold',
                    tag.toLowerCase().includes('tanstack') && 'text-primary-foreground border-primary',
                    tag.toLowerCase().includes('next') && 'border-accent text-accent',
                  )}
                >
                  {tag}
                </div>
              ))}
            </div>
          )}
        </div>

        <LucideExternalLink className="shrink-0 self-end justify-self-end" />
      </div>
    </Link>
  )
}
