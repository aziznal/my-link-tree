import { Hero } from './Hero'
import { Menu, SECTIONS } from './Menu'
import { Projects } from './Projects'
import { SocialLinks } from './SocialLinks'
import { AboutMe } from './AboutMe'
import { ThemePicker } from './ThemePicker'

export function LandingPage() {
  return (
    <div className="flex flex-col pb-24 items-stretch">
      <header className="font-lowres sticky top-0 z-10 flex gap-[3rem] text-[2rem] backdrop-blur-md bg-background/70 p-6 mb-[12rem] items-center justify-between">
        <div />

        <div className="flex gap-[2rem] items-center">
          <Menu />
        </div>

        <ThemePicker />
      </header>

      <main className="flex flex-col items-stretch gap-[8rem] mx-auto w-[min(100%,120ch)] px-8">
        <Hero sectionId={SECTIONS[0].id} />

        <AboutMe sectionId={SECTIONS[1].id} />

        <SocialLinks />

        <Projects sectionId={SECTIONS[2].id} />
      </main>
    </div>
  )
}
