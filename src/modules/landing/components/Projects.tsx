import { Subtitle, Title } from '@/lib/components/ui/Headings'
import { MinorLink } from '@/lib/components/MinorLink'
import { PropsWithChildren } from 'react'
import { TinyLink } from '@/lib/components/TinyLink'

export function Projects(props: { sectionId: string }) {
  return (
    <div id={props.sectionId} className="scroll-mt-20 space-y-14">
      <div>
        <Title>stuff i've done</Title>
      </div>

      <section>
        <Subtitle>applications</Subtitle>

        <LinkList>
          <MinorLink
            siteUrl="https://tax-calc.aziznal.com"
            githubUrl="https://github.com/aziznal/tax-calc"
            text="Tax Calculator"
          />

          <MinorLink
            siteUrl="https://german-docs.aziznal.com"
            githubUrl="https://github.com/aziznal/german-docs"
            text="German Docs"
          />

          <MinorLink
            siteUrl="https://marketplace.visualstudio.com/items?itemName=aziznal.dart-import-sorter"
            githubUrl="https://github.com/aziznal/dart-import-sorter"
            text="VSCode Extension: Dart import sorter (12K+ downloads)"
          />

          <MinorLink
            siteUrl={undefined}
            githubUrl={undefined}
            text="The Middleman: App for connecting syrians looking for handymen, doctors, and more"
          />
        </LinkList>
      </section>

      <section>
        <Subtitle>concepts</Subtitle>

        <LinkList>
          <MinorLink
            siteUrl="https://query-key-factory.aziznal.com/"
            githubUrl="https://github.com/aziznal/tanstack-query-key-factory-demo"
            text="How query keys work in tanstack query"
          />

          <MinorLink
            siteUrl="https://lazy-loading.aziznal.com"
            githubUrl="https://github.com/aziznal/nextjs-tanstack-query-lazy-loading"
            text="Infinite scroll & lazy loading with tanstack query"
          />
        </LinkList>
      </section>

      <section>
        <Subtitle>components</Subtitle>

        <LinkList>
          <MinorLink
            siteUrl="https://streak-tracker.aziznal.com"
            githubUrl="https://github.com/aziznal/streak-tracker"
            text="Streak Tracker"
          />

          <MinorLink
            siteUrl="https://tag-input.aziznal.com"
            githubUrl="https://github.com/aziznal/tagifying-input"
            text="Tag Input Demo"
          />
        </LinkList>
      </section>

      <section>
        <Subtitle>random fun</Subtitle>

        <LinkList>
          <MinorLink
            siteUrl="https://matrix-effect.aziznal.com/"
            githubUrl="https://github.com/aziznal/matrix-effect"
            text="Matrix Effect"
          />

          <MinorLink
            siteUrl="https://project-graveyard.aziznal.com"
            githubUrl="https://github.com/aziznal/project-graveyard"
            text="My Project Graveyard"
          />

          <MinorLink
            siteUrl={undefined}
            githubUrl="https://github.com/aziznal/inverted-binary-tree-in-30-programming-languages"
            text="Inverting a binary tree in 30+ programming languages"
          />

          <MinorLink
            siteUrl="https://thai-number-generator.aziznal.com/"
            githubUrl="https://github.com/aziznal/thai-number-generator"
            text="Thai Number Generator"
          />
        </LinkList>
      </section>

      <section>
        <h2 className="font-lowres text-2xl mb-4">archive</h2>

        <div className="text-muted fill-muted">
          <LinkList>
            <TinyLink
              siteUrl="https://guitar-practice.aziznal.com"
              githubUrl="https://github.com/aziznal/guitar-practice-website"
              text="Guitar practice website (wip)"
            />

            <TinyLink
              siteUrl="https://tanstack-forms.aziznal.com"
              githubUrl="https://github.com/aziznal/tanstack-form-examples"
              text="Tanstack forms examples"
            />

            <TinyLink
              siteUrl="https://i18n-in-nextjs.aziznal.com"
              githubUrl="https://github.com/aziznal/i18n-in-nextjs15-app-router"
              text="Demo of next-intl"
            />

            <TinyLink
              siteUrl="https://design-principles.aziznal.com"
              githubUrl="https://github.com/aziznal/design-principles-comparison"
              text="Interactive design principles"
            />

            <TinyLink
              siteUrl="https://custom-themes.aziznal.com"
              githubUrl="https://github.com/aziznal/custom-themes-nextjs"
              text="Custom Themes with Tailwind"
            />

            <TinyLink
              siteUrl="https://emoji-picker.aziznal.com"
              githubUrl="https://github.com/aziznal/nextjs-fuzzy-lazy-loading-emoji-picker"
              text="Emoji Picker"
            />

            <TinyLink
              siteUrl="https://ne-zaman-askeriyeye-gidiyorsun.aziznal.com"
              githubUrl="https://github.com/aziznal/ne-zaman-askeriyeye-gidiyorsun"
              text="When am I going to my military service?"
            />

            <TinyLink
              siteUrl="https://guitar-practice.aziznal.com"
              githubUrl="https://github.com/aziznal/guitar-practice-website"
              text="Guitar practice website (wip)"
            />

            <TinyLink
              siteUrl={undefined}
              githubUrl="https://github.com/aziznal/route-optimizer"
              text="Visual exploration of path finding algorithms using in python"
            />

            <TinyLink
              siteUrl={undefined}
              githubUrl="https://github.com/aziznal/basic-web-scraper"
              text="Python library I made containing utilities for web scraping"
            />

            <TinyLink
              siteUrl={undefined}
              githubUrl="https://github.com/aziznal/html-video-player-customizations"
              text="HTML video player customization, and why you probably shouldn't do it"
            />

            <TinyLink
              siteUrl="https://samehnaal.com"
              githubUrl="https://github.com/aziznal/samehnaal.com"
              text="Samehnaal.com"
            />
          </LinkList>
        </div>
      </section>
    </div>
  )
}

export function LinkList(props: PropsWithChildren) {
  return <div>{props.children}</div>
}
