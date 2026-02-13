import { cn } from '@/lib/cn'
import { Hero } from './Hero'
import { Menu, SECTIONS } from './Menu'
import { Projects } from './Projects'
import { SocialLinks } from './SocialLinks'
import { Summary } from './Summary'

export function LandingPage() {
  return (
    <div className="flex gap-16 flex-col-reverse lg:flex-row lg:container pb-24 lg:py-24">
      <div className="flex flex-col gap-12 max-lg:container">
        <Hero sectionId={SECTIONS[0].id} />

        <Summary sectionId={SECTIONS[1].id} />

        <SocialLinks />

        <Projects sectionId={SECTIONS[2].id} />
      </div>

      {/* <div>power</div> */}

      <div
        className={cn(
          'font-lowres',
          'lg:sticky lg:top-24 lg:flex lg:flex-col lg:text-[2rem] lg:h-fit lg:shrink-0',
          'max-lg:sticky max-lg:top-0 max-lg:flex max-lg:gap-2 max-lg:text-[1.5rem] max-lg:backdrop-blur-md bg-background/70 max-lg:py-6 max-lg:container',
        )}
      >
        <Menu />
      </div>
    </div>
  )
}
