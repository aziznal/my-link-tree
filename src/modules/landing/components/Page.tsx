import { Hero } from './Hero'
import { Menu, SECTIONS } from './Menu'
import { Projects } from './Projects'
import { SocialLinks } from './SocialLinks'
import { Summary } from './Summary'

export function LandingPage() {
  return (
    <div className="flex flex-col mx-auto w-[min(100%,90ch)] px-8 pb-24 items-stretch">
      <header className="font-lowres sticky top-0 z-10 flex gap-[3rem] text-[2rem] backdrop-blur-md bg-background/70 py-6 justify-center lg:-mx-[4rem] mb-[12rem]">
        <Menu />
        {/* <div>power</div> */}
      </header>

      <main className="flex flex-col items-stretch gap-[12rem]">
        <div className="h-[40dvh]">
          <Hero sectionId={SECTIONS[0].id} />{' '}
        </div>

        <div className="space-y-12">
          <Summary sectionId={SECTIONS[1].id} />

          <SocialLinks />
        </div>

        <Projects sectionId={SECTIONS[2].id} />
      </main>
    </div>
  )
}
