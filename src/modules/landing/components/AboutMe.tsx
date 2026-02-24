import { Frame } from '@/lib/components/ui/Frame'
import { Title } from '@/lib/components/ui/Headings'

export function AboutMe(props: { sectionId: string }) {
  const startDate = new Date('2019-01-01')
  const elapsedYears =
    new Date(Date.now()).getFullYear() - startDate.getFullYear()

  return (
    <div id={props.sectionId} className="scroll-mt-20 w-full">
      <Title>a bit about me</Title>

      <Frame className="space-y-6 font-mono lowercase backdrop-blur-md">
        <p>
          I'm Aziz; a web developer with a passion for making things
          people may possibly one day want to use.
        </p>

        <p>
          I've been a developer for the last {elapsedYears} years. I've worked
          professionally as a{' '}
          <span className="text-[1.375rem] text-glow-sm text-shadow-primary font-lowres">
            Senior developer
          </span>
          ™ and{' '}
          <span className="text-[1.375rem] text-glow-sm text-shadow-primary font-lowres">
            Team Lead
          </span>
          . See my CV for details.
        </p>

        <p>
          I enjoy reading & making cool components and animations in my spare
          time.
        </p>
      </Frame>
    </div>
  )
}
