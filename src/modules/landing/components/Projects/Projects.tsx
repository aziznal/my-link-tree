import { ProjectShowcase } from './Project'
import type { PropsWithChildren } from 'react'
import { Subtitle, Title } from '@/lib/components/ui/Headings'
import { MinorLink } from '@/modules/landing/components/Projects/MinorLink'
import { ArchiveLink } from '@/modules/landing/components/Projects/ArchiveLink'

export function Projects(props: { sectionId: string }) {
  return (
    <div id={props.sectionId} className="scroll-mt-20 space-y-8">
      <div>
        <Title>Projects</Title>
      </div>

      <section
        className="grid grid-flow-dense grid-cols-[repeat(auto-fit,_minmax(min(100%,300px),1fr))] gap-6"
        style={{ containerType: 'inline-size' }}
      >
        <ProjectShowcase
          title={<span className="text-emerald-500">Finman</span>}
          subtitle="Finman: personal finance application for power users"
          description="A simple but customizable personal finance dashboard to track income, payments, subscriptions, installments, and more. You can create views with combinations of filters and sortings to make your perfect dashboard. Also tracks currency exchange rates."
          tech={['postgres', 'drizzle', 'RLS', 'typescript', 'coolify', 'tanstack start']}
          siteLink="https://finance-manager.aziznal.com"
          githubLink={undefined}
          imageSrc=""
          sourceModel="closed"
        />

        <ProjectShowcase
          title={<span className="text-[#5d3ebd]">The Middleman App</span>}
          subtitle="App for arabic speakers to find services"
          description="A mobile app and website for connecting arabic speakers looking for handymen, doctor clinics, and more. This was a friend's idea that we collaborated on until we couldn't sustain development after work hours."
          siteLink={undefined}
          githubLink={undefined}
          tech={['firebase', 'google cloud functions', 'typescript', 'dart', 'flutter', 'angular', 'rx.js']}
          imageSrc=""
          sourceModel="closed"
        />

        <ProjectShowcase
          title="Udao SkillsValley"
          subtitle="SkillsValley: Skills-based recruiting & job matching"
          description="A platform for talent acquisition and management, as well as recruiting platform with an ATS, the ability to publish job internal or public job posts, create internal courses, and apply to jobs with a skill-based recommendation engine"
          sourceModel="closed"
          imageSrc=""
          tech={[
            'supabase',
            'vercel',
            'cloudflare',
            'google cloud',
            'next.js',
            'stripe',
            'mux',
            'posthog',
            'algolia',
            'i18next',
            'playwright',
            'react-email',
            'recharts',
          ]}
          siteLink="https://skillsvalley.io"
          githubLink={undefined}
        />

        <ProjectShowcase
          title={
            <span className="bg-clip-text text-transparent bg-[linear-gradient(to_bottom,#777777_45%,#DD0000_45%,#DD0000_66.66%,#FFCE00_66.66%)]">
              German Docs
            </span>
          }
          subtitle="German language reference"
          description="half-parody nestjs docs site clone I made to document my german learning and to use as a reference. Includes custom-implemented markdown-to-webpage preprocessing and cmd-k fuzzy search."
          siteLink="https://german-docs.aziznal.com"
          githubLink="https://github.com/aziznal/german-docs"
          tech={['next.js', 'markdown', 'remark', 'fuse.js']}
          imageSrc=""
          sourceModel="open"
        />

        <ProjectShowcase
          title="Dart Import Sorter"
          subtitle="VSCode Extension with 12K+ downloads"
          description="IDE extension to help you determine what a file does at a glance by looking at an organized set of the imports. Accepts RegEx rules with subgrouping allowing highly customizable import sorting."
          siteLink="https://marketplace.visualstudio.com/items?itemName=aziznal.dart-import-sorter"
          githubLink="https://github.com/aziznal/dart-import-sorter"
          sourceModel="open"
          imageSrc=""
          tech={['typescript', 'regex']}
        />
      </section>

      <section>
        <Subtitle className="text-muted">concepts</Subtitle>

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
        <Subtitle className="text-muted">components</Subtitle>

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
        <Subtitle className="text-muted">random fun</Subtitle>

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

          <MinorLink
            siteUrl="https://tax-calc.aziznal.com"
            githubUrl="https://github.com/aziznal/tax-calc"
            text="Tax Calculator"
          />
        </LinkList>
      </section>

      <section>
        <h2 className="font-lowres text-2xl mb-4 text-muted">archive</h2>

        <div className="text-muted fill-muted">
          <LinkList>
            <ArchiveLink
              siteUrl="https://guitar-practice.aziznal.com"
              githubUrl="https://github.com/aziznal/guitar-practice-website"
              text="Guitar practice website (wip)"
            />

            <ArchiveLink
              siteUrl="https://tanstack-forms.aziznal.com"
              githubUrl="https://github.com/aziznal/tanstack-form-examples"
              text="Tanstack forms examples"
            />

            <ArchiveLink
              siteUrl="https://i18n-in-nextjs.aziznal.com"
              githubUrl="https://github.com/aziznal/i18n-in-nextjs15-app-router"
              text="Demo of next-intl"
            />

            <ArchiveLink
              siteUrl="https://design-principles.aziznal.com"
              githubUrl="https://github.com/aziznal/design-principles-comparison"
              text="Interactive design principles"
            />

            <ArchiveLink
              siteUrl="https://custom-themes.aziznal.com"
              githubUrl="https://github.com/aziznal/custom-themes-nextjs"
              text="Custom Themes with Tailwind"
            />

            <ArchiveLink
              siteUrl="https://emoji-picker.aziznal.com"
              githubUrl="https://github.com/aziznal/nextjs-fuzzy-lazy-loading-emoji-picker"
              text="Emoji Picker"
            />

            <ArchiveLink
              siteUrl="https://ne-zaman-askeriyeye-gidiyorsun.aziznal.com"
              githubUrl="https://github.com/aziznal/ne-zaman-askeriyeye-gidiyorsun"
              text="When am I going to my military service?"
            />

            <ArchiveLink
              siteUrl="https://guitar-practice.aziznal.com"
              githubUrl="https://github.com/aziznal/guitar-practice-website"
              text="Guitar practice website (wip)"
            />

            <ArchiveLink
              siteUrl={undefined}
              githubUrl="https://github.com/aziznal/route-optimizer"
              text="Visual exploration of path finding algorithms using in python"
            />

            <ArchiveLink
              siteUrl={undefined}
              githubUrl="https://github.com/aziznal/basic-web-scraper"
              text="Python library I made containing utilities for web scraping"
            />

            <ArchiveLink
              siteUrl={undefined}
              githubUrl="https://github.com/aziznal/html-video-player-customizations"
              text="HTML video player customization, and why you probably shouldn't do it"
            />

            <ArchiveLink
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
