import { Title } from '@/lib/components/ui/Headings'

export function ProjectShowcase(props: {
  title: string
  imageSrc: string
  description: string
  link: string
  tech: string[]
  sourceModel: 'open' | 'closed'
}) {
  return (
    <div>
      <Title>{props.title}</Title>

      <img src="" alt="" width="" height="" />
    </div>
  )
}
