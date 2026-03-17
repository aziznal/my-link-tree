import { Title } from '@/lib/components/ui/Headings'
import { PropsWithChildren } from 'react'
import { ArticleLink } from '@/lib/components/ArticleLink'
import { Slackbot } from './Words/Slackbot'
import { VSCode } from './Words/VSCode'
import { Vim } from './Words/Vim'
import { Typescript } from './Words/Typescript'
import { Npm } from './Words/Npm'
import { Angular } from './Words/Angular'
import { Dart } from './Words/Dart'
import { Flutter } from './Words/Flutter'

export function Blog(props: { sectionId: string }) {
  return (
    <div id={props.sectionId} className="scroll-mt-20 space-y-14">
      <div>
        <Title>Blog</Title>
      </div>

      <LinkList>
        <ArticleLink
          url="https://medium.com/itnext/create-a-slack-daily-bot-with-automations-and-cron-jobs-7c863ee6faad"
          text={
            <span>
              Create a Daily <Slackbot /> With Automations and Cron Jobs
            </span>
          }
          publishDate="Feb 3, 2025"
        />

        <ArticleLink
          url="https://medium.com/itnext/multitask-like-a-pro-with-the-wip-commit-2f4d40ca0192"
          text="Multitask Like a Pro with the WIP Commit"
          publishDate="Jan 30, 2024"
        />

        <ArticleLink
          url="https://medium.com/itnext/choosing-your-backend-onsite-vs-cloud-vs-serverless-vs-edge-6d801a573a72"
          text="Choose Your Backend: Onsite vs Cloud vs Serverless vs Edge"
          publishDate="Oct 22, 2023"
        />

        <ArticleLink
          url="https://medium.com/itnext/easy-typescript-monorepo-with-npm-workspaces-b271d81837e7"
          text={
            <span>
              Easy Typescript Monorepo with <Npm /> Workspaces
            </span>
          }
          publishDate="Jul 17, 2023"
        />

        <ArticleLink
          url="https://medium.com/itnext/vim-for-the-vs-code-user-part-2-language-support-d6e953973ccc"
          text={
            <span>
              <Vim /> for the <VSCode /> User: Part 2 - Language Support
            </span>
          }
          publishDate="Jul 3, 2023"
        />

        <ArticleLink
          url="https://medium.com/itnext/vim-for-the-vs-code-user-part-1-initial-setup-53617a4905f4"
          text={
            <span>
              <Vim /> for the <VSCode /> User: Part 1 - Initial Setup
            </span>
          }
          publishDate="Jun 12, 2023"
        />

        <ArticleLink
          url="https://medium.com/itnext/vs-code-shortcuts-to-navigate-your-editor-like-tarzan-in-the-jungle-part-3-18563c4d3a79"
          text={
            <span>
              <VSCode /> Shortcuts to Navigate Your Editor Like Tarzan in The Jungle - Part 3
            </span>
          }
          publishDate="May 28, 2023"
        />

        <ArticleLink
          url="https://medium.com/itnext/typescript-runtime-type-checking-d7513c5db214"
          text={
            <span>
              <Typescript />: discriminated unions and checking types at runtime
            </span>
          }
          publishDate="Apr 25, 2023"
        />

        <ArticleLink
          url="https://medium.com/itnext/the-ultimate-sidenav-guide-with-angular-resizeable-dynamic-and-toggleable-c42dc057798d"
          text={
            <span>
              Building a Dynamic, Toggleable, and Resizable Sidebar in <Angular />
            </span>
          }
          publishDate="Apr 17, 2023"
        />

        <ArticleLink
          url="https://medium.com/better-programming/building-reactive-components-with-angular-9c39597aba7f"
          text={
            <span>
              Building Better Reactive Components With <Angular />
            </span>
          }
          publishDate="Mar 7, 2023"
        />

        <ArticleLink
          url="https://medium.com/itnext/better-type-safety-with-angular-generic-components-4a0b4a333bae"
          text={
            <span>
              Better Type Safety with <Angular /> Generic Components
            </span>
          }
          publishDate="Jan 30, 2023"
        />

        <ArticleLink
          url="https://medium.com/itnext/vs-code-shortcuts-to-code-like-youre-playing-a-piano-part-2-c27202ea7ea1"
          text={
            <span>
              <VSCode /> Shortcuts to Code Like You’re Playing A Piano - Part 2
            </span>
          }
          publishDate="Jan 16, 2023"
        />

        <ArticleLink
          url="https://medium.com/better-programming/simplify-dependency-injection-between-different-packages-in-dart-e771e38908a6"
          text={
            <span>
              Simplify Dependency Injection Between Different Packages in <Dart />
            </span>
          }
          publishDate="Jan 5, 2023"
        />

        <ArticleLink
          url="https://medium.com/better-programming/vs-code-shortcuts-to-code-like-youre-playing-a-piano-e5db7b272d1"
          text={
            <span>
              <VSCode /> Shortcuts To Code Like You’re Playing a Piano
            </span>
          }
          publishDate="Dec 20, 2022"
        />

        <ArticleLink
          url="https://medium.com/better-programming/responsive-web-design-implement-your-website-for-different-screen-sizes-4e151274b88c"
          text="Mobile-First Responsive Web Design"
          publishDate="Oct 28, 2022"
        />

        <ArticleLink
          url="https://medium.com/better-programming/how-to-implement-a-typescript-web-app-with-clean-architecture-27c7eb745ab4"
          text={
            <span>
              How To Implement a <Typescript /> Web App With Clean Architecture
            </span>
          }
          publishDate="Aug 5, 2022"
        />

        <ArticleLink
          url="https://medium.com/better-programming/the-ultimate-clean-architecture-template-for-typescript-projects-e53936269bb9"
          text={
            <span>
              The Ultimate Clean Architecture Template for <Typescript /> Projects
            </span>
          }
          publishDate="Aug 4, 2022"
        />

        <ArticleLink
          url="https://medium.com/better-programming/sorting-your-flutter-projects-imports-ffb88b4502f"
          text={
            <span>
              I Wrote a <VSCode /> Extension to Sort Your <Flutter /> Project’s Imports
            </span>
          }
          publishDate="May 28, 2022"
        />
      </LinkList>
    </div>
  )
}

export function LinkList(props: PropsWithChildren) {
  return <div>{props.children}</div>
}
