import { cn } from '@/lib/cn'
import { Hero } from './Hero'
import { Menu, SECTIONS } from './Menu'
import { Projects } from './Projects'
import { SocialLinks } from './SocialLinks'
import { Summary } from './Summary'
import { Frame } from '@/lib/components/ui/Frame'

export function LandingPage() {
  return (
    <div className="flex flex-col mx-auto w-[min(100%,80ch)] px-8 pb-24 items-stretch gap-12">
      <div className="font-lowres sticky top-0 z-10 flex gap-[3rem] text-[2rem] backdrop-blur-md bg-background/70 py-6 justify-center -mx-[4rem]">
        <Menu />
        {/* <div>power</div> */}
      </div>

      <div className="h-[90dvh]">
        <Hero sectionId={SECTIONS[0].id} />{' '}
      </div>

      <Summary sectionId={SECTIONS[1].id} />

      <SocialLinks />

      <Projects sectionId={SECTIONS[2].id} />
    </div>
  )
}
