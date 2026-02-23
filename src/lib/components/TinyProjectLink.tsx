import { PixelatedChevron } from './PixelatedChevron'

export function TinyProjectLink({
  siteUrl,
  githubUrl,
  text,
}: {
  siteUrl: string | undefined
  githubUrl: string | undefined
  text: string
}) {
  return (
    <div className="font-lowres text-[1.375rem] space-x-2 leading-none items-center hover:bg-foreground/10">
      <PixelatedChevron className="group-hover:fill-background size-3 -mt-1" />

      <span>{text}</span>

      {siteUrl !== undefined && (
        <a
          className="hover:text-background hover:bg-foreground h-fit ml-2 text-foreground/40"
          target="_blank"
          rel="noopener noreferrer"
          href={siteUrl}
        >
          [site]
        </a>
      )}

      {githubUrl !== undefined && (
        <a
          className="hover:text-background hover:bg-foreground h-fit ml-2 text-foreground/40"
          target="_blank"
          rel="noopener noreferrer"
          href={githubUrl}
        >
          [github]
        </a>
      )}
    </div>
  )
}
