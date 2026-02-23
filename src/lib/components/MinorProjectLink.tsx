import { PixelatedChevron } from './PixelatedChevron'

export function MinorProjectLink({
  siteUrl,
  githubUrl,
  text,
}: {
  siteUrl: string | undefined
  githubUrl: string | undefined
  text: string
}) {
  return (
    <div className="font-lowres flex text-[1.675rem] gap-2 leading-none hover:bg-foreground/10">
      <PixelatedChevron className="group-hover:fill-background fill-foreground shrink-0 mt-1" />

      <div className="space-x-2 inline">
        <span>{text}</span>

        {siteUrl !== undefined && (
          <a
            className="hover:text-background hover:bg-foreground h-fit ml-2 text-[1.625rem] text-foreground/40"
            target="_blank"
            rel="noopener noreferrer"
            href={siteUrl}
          >
            [site]
          </a>
        )}

        {githubUrl !== undefined && (
          <a
            className="hover:text-background hover:bg-foreground h-fit ml-2 text-[1.625rem] text-foreground/40"
            target="_blank"
            rel="noopener noreferrer"
            href={githubUrl}
          >
            [github]
          </a>
        )}
      </div>
    </div>
  )
}
