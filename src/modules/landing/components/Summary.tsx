import { SectionTitle } from '@/lib/components/Headings'

export function Summary(props: { sectionId: string }) {
  const startDate = new Date('2020-01-01')
  const elapsedYears =
    new Date(Date.now()).getFullYear() - startDate.getFullYear()

  return (
    <div id={props.sectionId} className="scroll-mt-20">
      <SectionTitle>a bit about me</SectionTitle>

      <div className="max-w-[70ch] box-content space-y-6 border-3 p-6 font-mono lowercase backdrop-blur-xs rounded">
        <p>Hi. I'm Aziz.</p>

        <p>
          I've been a developer for the last {elapsedYears} years. I've worked
          as a{' '}
          <span className="text-[1.375rem] text-glow-sm text-shadow-primary font-lowres">
            Senior developer
          </span>
          ™ and{' '}
          <span className="text-[1.375rem] text-glow-sm text-shadow-primary font-lowres">
            Team Lead
          </span>{' '}
          for the last 3 years. Check out my CV for details
        </p>

        <p>
          I enjoy reading & making cool components and animations in my spare
          time.
        </p>
      </div>
    </div>
  )
}
