import { PixelatedArticle } from './icons/PixelatedArticle'
import { PixelatedExternalLink } from './icons/PixelatedExternalLink'

export function ArticleLink({
  siteUrl,
  text,
}: {
  siteUrl: string
  text: string
}) {
  return (
    <div className="font-lowres flex text-[1.625rem] gap-2 leading-none hover:bg-foreground/10">
      <PixelatedArticle className="group-hover:fill-background size-4 mt-[.3125rem] fill-foreground" />

      <div className="space-x-2 inline">
        <span>{text}</span>

        <div className="ml-2 inline text-[1.625rem] text-foreground/40 fill-foreground/40">
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
        </div>
      </div>
    </div>
  )
}
