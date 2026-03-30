import { cn } from '@/lib/cn'

export function ProjectShowcase(props: {
  title: string | React.ReactNode
  imageSrc: string
  subtitle: string
  description: React.ReactNode
  siteLink: string | undefined
  githubLink: string | undefined
  tech: string[]
  sourceModel: 'open' | 'closed'
}) {
  return (
    <a href={props.siteLink ?? props.githubLink} target="_blank" rel="noopener" className="contents">
      <div className="flex flex-col gap-3 border p-6 hover:bg-background-lighter">
        <h1 className="leading-none text-3xl font-lowres font-bold">{props.title}</h1>

        <h2 className="text-lg">{props.subtitle}</h2>

        <p className="text-muted">{props.description}</p>

        <img src="" alt="" width="" height="" />

        <div className="flex flex-wrap gap-2 leading-none">
          {props.tech.map((tech) => (
            <span
              key={`${props.title}-${tech}`}
              className={cn(
                'font-bold border leading-none px-2 py-1 rounded-full bg-current/15 border-current/40',
                tech === 'postgres' && 'text-[#54b2ff]',
                tech === 'RLS' && 'text-[#54b2ff]',
                tech === 'drizzle' && 'text-[#c5f74f]',
                tech === 'typescript' && 'text-[#3c96fa]',
                tech === 'coolify' && 'text-[#9057ff]',
                tech === 'tanstack start' && 'text-[#11bad1]',
                tech === 'next.js' && 'text-foreground',
                tech === 'markdown' && 'text-foreground',
                tech === 'remark' && 'text-red-400',
                tech === 'fuse.js' && 'text-[#9e5eb8]',
                tech === 'regex' && 'text-[#ffcd1f]',
                tech === 'firebase' && 'text-[#ff9408]',
                tech === 'google cloud functions' && 'text-blue-500',
                tech === 'dart' && 'text-blue-500',
                tech === 'flutter' && 'text-blue-500',
                tech === 'angular' && 'text-rose-400',
                tech === 'rx.js' && 'text-rose-400',
                tech === 'supabase' && 'text-emerald-600',
                tech === 'vercel' && 'text-foreground',
                tech === 'cloudflare' && 'text-amber-500',
                tech === 'google cloud' && 'text-blue-500',
                tech === 'stripe' && 'text-[#6860ff]',
                tech === 'mux' && 'text-[#fe4b09]',
                tech === 'posthog' && 'text-[#f9bf32]',
                tech === 'algolia' && 'text-blue-400',
                tech === 'playwright' && 'text-[#35b039]',
                tech === 'react-email' && 'text-[#00d8ff]',
                tech === 'recharts' && 'text-[#7d76d6]',
              )}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}
