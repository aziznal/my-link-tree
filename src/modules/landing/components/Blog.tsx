import { Title } from '@/lib/components/ui/Headings'
import { PropsWithChildren } from 'react'
import { ArticleLink } from '@/lib/components/ArticleLink'

export function Blog(props: { sectionId: string }) {
  return (
    <div id={props.sectionId} className="scroll-mt-20 space-y-14">
      <div>
        <Title>Blog</Title>
      </div>

      <LinkList>
        <ArticleLink siteUrl="" text="TODO" />
      </LinkList>
    </div>
  )
}

export function LinkList(props: PropsWithChildren) {
  return <div>{props.children}</div>
}
