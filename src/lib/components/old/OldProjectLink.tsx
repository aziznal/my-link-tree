import { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { LucideImage } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export function OldProjectLink({
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
        'flex justify-center shrink-0 lg:w-[500px] w-full gap-4 lg:p-4 rounded-lg hover:bg-zinc-600/40 focus:bg-zinc-800 active:bg-zinc-800 transition-colors duration-75',
        className,
      )}
    >
      <div className="shrink-0 w-[160px] h-[130px] border border-zinc-600 rounded-lg flex items-center justify-center">
        {!imageSrc && <LucideImage className="text-zinc-600" size="36" />}

        {imageSrc && (
          <img
            src={imageSrc}
            alt={description}
            width={180}
            height={180}
            className="rounded-lg object-cover w-full h-full"
            decoding="async"
            fetchPriority="high"
          />
        )}
      </div>

      <div className="flex-1 flex flex-col gap-1">
        <span className="font-medium text-lg">{children}</span>

        <p className="text-zinc-400 text-sm">{description}</p>
      </div>
    </Link>
  )
}
