import { SectionTitle } from '@/lib/components/Headings'
import { ProjectLink } from '@/lib/components/ProjectLink'

export function Projects() {
  return (
    <div>
      <SectionTitle>projects</SectionTitle>

      <div
        className="grid grid-flow-dense gap-8 sm:gap-12"
        style={{
          gridTemplateColumns:
            'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
        }}
      >
        <ProjectLink
          href="https://custom-themes.aziznal.com"
          imageSrc="/previews/custom-themes.png"
          description={
            'Testing out how tailwind can be leveraged to create custom themes.'
          }
        >
          Custom Themes with Tailwind
        </ProjectLink>

        <ProjectLink
          href="https://design-principles.aziznal.com"
          imageSrc="/previews/design-principles.png"
          description={
            'A before and after comparison with an interactive site wreckingtoolbar for users to play with.'
          }
        >
          Interactive design principles
        </ProjectLink>

        <ProjectLink
          href="https://ne-zaman-askeriyeye-gidiyorsun.aziznal.com"
          imageSrc="/previews/military-service.png"
          description={
            "A couple of dates to which I redirected my friends to when they asked me when I'm going to my military service. "
          }
        >
          When am I going to my military service?
        </ProjectLink>

        <ProjectLink
          href="https://german-docs.aziznal.com"
          imageSrc="/previews/german-docs.png"
          description={
            'A site where I document some useful stuff for learning German.'
          }
        >
          German Docs
        </ProjectLink>

        <ProjectLink
          href="https://lazy-loading.aziznal.com"
          imageSrc="/previews/lazy-loading.png"
          description={
            'A couple of demos for lazy loading and infinite scroll withTanstack (a.k.a React) Query. '
          }
        >
          Lazy loading with React Query
        </ProjectLink>

        <ProjectLink
          href="https://emoji-picker.aziznal.com"
          imageSrc="/previews/emoji-picker.png"
          description={
            'Emoji Picker with lazy loading, virtualization, and search. Why? Because I had 20 hours to kill researching unicode standards. '
          }
        >
          Emoji Picker
        </ProjectLink>

        <ProjectLink
          href="https://samehnaal.com"
          imageSrc="/previews/sameh-naal-com.png"
          description={
            'A very basic portfolio I made for my dad to showcase some of his work. Took about 2 hours to finish, including purchasing the domain and deploying the site.'
          }
        >
          Samehnaal.com
        </ProjectLink>

        <ProjectLink
          href="https://tag-input.aziznal.com"
          imageSrc="/previews/tag-input.png"
          description={
            'A tag input made from scratch using React and TailwindCSS. It seemed quite difficult at the beginning, then turned out to be easy, then hard again. Was a lot of fun!'
          }
        >
          Tag Input Demo
        </ProjectLink>

        <ProjectLink
          href="https://query-key-factory.aziznal.com/"
          imageSrc="/previews/query-key-demo.png"
          description={
            'An interactive demo of how tanstack queries, query keys, stale data handling, and invalidation work and can be configured.'
          }
        >
          Tanstack Query Keys Demo
        </ProjectLink>

        <ProjectLink
          href="https://thai-number-generator.aziznal.com/"
          imageSrc="/previews/thai-number-generator-demo.png"
          description={
            'A very simple thai number generator that I made to practice my thai numbers'
          }
        >
          Thai Number Generator
        </ProjectLink>

        <ProjectLink
          href="https://matrix-effect.aziznal.com/"
          imageSrc="/previews/matrix-effect.jpeg"
          description={
            'An matrix digital rain effect I made for fun (with some customization options)'
          }
        >
          Matrix Effect
        </ProjectLink>

        {/* <ProjectLink
          href="https://priorities.aziznal.com"
          imageSrc="/previews/priorities.png"
          description={
            "An app I made to help me flex some animation skills as well as try out the neubrutalism style. Oh, also trying to get my sh*t together I guess."
          }
        >
          Priorities App
        </ProjectLink> */}

        <ProjectLink
          href="https://i18n-in-nextjs.aziznal.com"
          imageSrc="/previews/i18n-in-nextjs.png"
          description={
            'An exploration of exactly what i18n is in the web world and how it can be applied in various different server and client contexts'
          }
        >
          i18n in Next.js
        </ProjectLink>

        <ProjectLink
          href="https://tax-calc.aziznal.com"
          imageSrc="/previews/tax-calc.png"
          description={
            'A tax calculator with support for multiple tax ranges and premade template'
          }
        >
          Tax Calculator
        </ProjectLink>

        <ProjectLink
          href="https://streak-tracker.aziznal.com"
          imageSrc="/previews/streak-tracker.png"
          description={
            'A github-like streak tracker with customization options'
          }
        >
          Streak Tracker
        </ProjectLink>

        <ProjectLink
          href="https://guitar-practice.aziznal.com"
          imageSrc="/previews/guitar-practice-website.png"
          description={
            "A site I made to practice guitar with helpful tools and resources. I swear I'll start practicing soon."
          }
        >
          Guitar practice website (wip)
        </ProjectLink>

        <ProjectLink
          href="https://tanstack-forms.aziznal.com"
          imageSrc="/previews/tanstack-forms.png"
          description={
            'A few examples implemented with the excellent tanstack forms library'
          }
        >
          Tanstack forms examples
        </ProjectLink>
      </div>
    </div>
  )
}
