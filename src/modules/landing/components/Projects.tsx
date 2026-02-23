import { Subtitle, Title } from '@/lib/components/ui/Headings'
import { MinorProjectLink } from '@/lib/components/MinorProjectLink'
import { PropsWithChildren } from 'react'
import { TinyProjectLink } from '@/lib/components/TinyProjectLink'

export function Projects(props: { sectionId: string }) {
  return (
    <div id={props.sectionId} className="scroll-mt-20 space-y-14">
      <div>
        <Title>other stuff i've done</Title>
      </div>

      <section>
        <Subtitle className="mb-4">concepts</Subtitle>

        <ProjectList>
          <MinorProjectLink
            siteUrl="https://query-key-factory.aziznal.com/"
            githubUrl="https://github.com/aziznal/tanstack-query-key-factory-demo"
            text="Interactive demo: How query keys work in tanstack query"
          />

          <MinorProjectLink
            siteUrl="https://lazy-loading.aziznal.com"
            githubUrl="https://github.com/aziznal/nextjs-tanstack-query-lazy-loading"
            text="Infinite scroll / Lazy loading with tanstack query"
          />
        </ProjectList>
      </section>

      <section>
        <Subtitle className="mb-4">components</Subtitle>

        <ProjectList>
          <MinorProjectLink
            siteUrl="https://streak-tracker.aziznal.com"
            githubUrl="https://github.com/aziznal/streak-tracker"
            text="Streak Tracker"
          />

          <MinorProjectLink
            siteUrl="https://tag-input.aziznal.com"
            githubUrl="https://github.com/aziznal/tagifying-input"
            text="Tag Input Demo"
          />
        </ProjectList>
      </section>

      <section>
        <Subtitle className="mb-4">random fun</Subtitle>

        <ProjectList>
          <MinorProjectLink
            siteUrl="https://matrix-effect.aziznal.com/"
            githubUrl="https://github.com/aziznal/matrix-effect"
            text="Matrix Effect"
          />
        </ProjectList>
      </section>

      <section>
        <Subtitle className="mb-4">applications</Subtitle>

        <ProjectList>
          <MinorProjectLink
            siteUrl="https://tax-calc.aziznal.com"
            githubUrl="https://github.com/aziznal/tax-calc"
            text="Tax Calculator"
          />

          <MinorProjectLink
            siteUrl="https://thai-number-generator.aziznal.com/"
            githubUrl="https://github.com/aziznal/thai-number-generator"
            text="Thai Number Generator"
          />

          <MinorProjectLink
            siteUrl="https://samehnaal.com"
            githubUrl="https://github.com/aziznal/samehnaal.com"
            text="Samehnaal.com"
          />

          <MinorProjectLink
            siteUrl="https://german-docs.aziznal.com"
            githubUrl="https://github.com/aziznal/german-docs"
            text="German Docs"
          />
        </ProjectList>
      </section>

      <section>
        <h2 className="font-lowres text-2xl mb-4">archive</h2>

        <div className="text-muted fill-muted">
          <ProjectList>
            <TinyProjectLink
              siteUrl="https://guitar-practice.aziznal.com"
              githubUrl="https://github.com/aziznal/guitar-practice-website"
              text="Guitar practice website (wip)"
            />

            <TinyProjectLink
              siteUrl="https://tanstack-forms.aziznal.com"
              githubUrl="https://github.com/aziznal/tanstack-form-examples"
              text="Tanstack forms examples"
            />

            <TinyProjectLink
              siteUrl="https://i18n-in-nextjs.aziznal.com"
              githubUrl="https://github.com/aziznal/i18n-in-nextjs15-app-router"
              text="Demo of next-intl"
            />

            <TinyProjectLink
              siteUrl="https://design-principles.aziznal.com"
              githubUrl="https://github.com/aziznal/design-principles-comparison"
              text="Interactive design principles"
            />

            <TinyProjectLink
              siteUrl="https://custom-themes.aziznal.com"
              githubUrl="https://github.com/aziznal/custom-themes-nextjs"
              text="Custom Themes with Tailwind"
            />

            <TinyProjectLink
              siteUrl="https://emoji-picker.aziznal.com"
              githubUrl="https://github.com/aziznal/nextjs-fuzzy-lazy-loading-emoji-picker"
              text="Emoji Picker"
            />

            <TinyProjectLink
              siteUrl="https://ne-zaman-askeriyeye-gidiyorsun.aziznal.com"
              githubUrl="https://github.com/aziznal/ne-zaman-askeriyeye-gidiyorsun"
              text="When am I going to my military service?"
            />

            <TinyProjectLink
              siteUrl="https://guitar-practice.aziznal.com"
              githubUrl="https://github.com/aziznal/guitar-practice-website"
              text="Guitar practice website (wip)"
            />
          </ProjectList>
        </div>
      </section>
    </div>
  )
}

export function ProjectList(props: PropsWithChildren) {
  return <div className="ms-4 space-y-2">{props.children}</div>
}
