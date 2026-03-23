import { Hero } from './Hero'
import { Menu, SECTIONS } from './Menu'
import { Projects } from './Projects'
import { SocialLinks } from './SocialLinks'
import { AboutMe } from './AboutMe'
import { ThemePicker } from './ThemePicker'
import { Blog } from './Blog'
import { BirdGarden } from './BirdGarden/BirdGarden'

export function LandingPage() {
  return (
    <div className="flex flex-col items-stretch">
      <header className="font-lowres sticky top-0 z-10 flex gap-[3rem] max-sm:text-[1.3rem] text-[2rem] backdrop-blur-md bg-background/70 p-6 mb-[12rem] items-center justify-between">
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

        <Blog sectionId={SECTIONS[3].id} />
      </main>

      <div
        className="px-8 bg-[#090916] flex flex-col items-center justify-center pt-[25rem] pb-[15rem]"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 5%, black)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 5%, black 20%)',
        }}
      >
        <BirdGarden className="mb-12" />

        <div className="text-muted font-lowres">
          Credits to{' '}
          <a rel="noopener" target="_blank" href="https://www.asciiart.eu" className="underline">
            asciiart.eu
          </a>{' '}
          &{' '}
          <a rel="noopener" target="_blank" href="https://asciiflow.com" className="underline">
            asciiflow.com
          </a>
        </div>
      </div>
    </div>
  )
}
