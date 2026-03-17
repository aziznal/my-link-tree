import { PixelatedArticle } from './icons/PixelatedArticle'

export function ArticleLink({
  url,
  text,
  publishDate,
}: {
  url: string
  text: string | React.ReactNode
  publishDate: string
}) {
  return (
    <a className="group block py-2 hover:bg-foreground/10" target="_blank" rel="noopener" href={url}>
      <div className="font-lowres flex gap-2 leading-none">
        <PixelatedArticle className="size-[2rem] fill-foreground shrink-0 mt-[.3rem]" />

        <div className="flex flex-col">
          <p className="text-[1.625rem]">{text}</p>

          <span className="text-muted-foreground">{publishDate}</span>
        </div>
      </div>
    </a>
  )
}
