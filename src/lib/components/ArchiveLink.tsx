import { PixelatedChevron } from './icons/PixelatedChevron'
import { PixelatedExternalLink } from './icons/PixelatedExternalLink'
import { PixelatedGithub } from './icons/PixelatedGithub'

export function ArchiveLink({
  siteUrl,
  githubUrl,
  text,
}: {
  siteUrl: string | undefined
  githubUrl: string | undefined
  text: string
}) {
  return (
    <div className="font-lowres flex text-[1.375rem] gap-2 leading-none hover:bg-foreground/10">
      <PixelatedChevron className="group-hover:fill-background size-3 mt-[.3125rem]" />

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
              <PixelatedExternalLink className="inline size-4" />
            </a>
          )}

          {githubUrl !== undefined && (
            <a
              className="hover:text-background hover:bg-foreground hover:fill-background px-1"
              target="_blank"
              rel="noopener"
              href={githubUrl}
            >
              <PixelatedGithub className="inline size-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
