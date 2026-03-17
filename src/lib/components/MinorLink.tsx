import { PixelatedChevron } from './icons/PixelatedChevron'
import { PixelatedExternalLink } from './icons/PixelatedExternalLink'
import { PixelatedGithub } from './icons/PixelatedGithub'

export function MinorLink({
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
      <PixelatedChevron className="group-hover:fill-background fill-foreground shrink-0 mt-[.375rem]" />

      <div className="space-x-2 inline">
        <span>{text}</span>

        <div className="inline text-[1.625rem]">
          {siteUrl !== undefined && (
            <a
              className="hover:text-background hover:bg-foreground hover:fill-background px-1"
              target="_blank"
              rel="noopener"
              href={siteUrl}
            >
              <PixelatedExternalLink className="inline size-5" />
            </a>
          )}

          {githubUrl !== undefined && (
            <a
              className="hover:text-background hover:bg-foreground hover:fill-background px-1"
              target="_blank"
              rel="noopener"
              href={githubUrl}
            >
              <PixelatedGithub className="inline size-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
