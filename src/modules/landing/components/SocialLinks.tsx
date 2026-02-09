import { SectionTitle } from '@/lib/components/Headings'
import { SocialLink } from '@/lib/components/SocialLink'
import {
  LucideGithub,
  LucidePencil,
  LucideBriefcase,
  LucideMail,
  LucideNewspaper,
} from 'lucide-react'

export function SocialLinks() {
  return (
    <div>
      <SectionTitle>LiNKS</SectionTitle>

      <div className="flex flex-wrap gap-4">
        <SocialLink
          href="https://github.com/aziznal"
          className="text-yellow-500"
        >
          <LucideGithub size="20" /> Github
        </SocialLink>

        <SocialLink
          href="https://medium.com/@aziznal"
          className="text-neutral-400"
        >
          <LucidePencil size="20" /> Medium
        </SocialLink>

        <SocialLink
          href="https://linkedin.com/in/abdulaziz-nal"
          className="text-blue-500"
        >
          <LucideBriefcase size="20" /> LinkedIn
        </SocialLink>

        <SocialLink href="mailto:abodenaal@gmail.com" className="text-gray-200">
          <LucideMail size="20" /> Email
        </SocialLink>

        <SocialLink href="" className="text-gray-200">
          <LucideNewspaper size="20" /> CV
        </SocialLink>
      </div>
    </div>
  )
}
