import { Title } from '@/lib/components/ui/Headings'
import { SocialLink } from '@/lib/components/SocialLink'
import { LucidePencil, LucideMail, LucideNewspaper } from 'lucide-react'
import { PixelatedLinkedin } from '@/lib/components/icons/PixelatedLinkedin'
import { PixelatedGithub } from '@/lib/components/icons/PixelatedGithub'
import { toast } from 'sonner'
import { PixelatedArticle } from '@/lib/components/icons/PixelatedArticle'
import { PixelatedPen } from '@/lib/components/icons/PixelatedPen'

export function SocialLinks() {
  const copyEmailToClipboard = async () => {
    await navigator.clipboard.writeText('abodenaal@gmail.com')
    toast.success('Email copied to clipboard', { position: 'bottom-center' })
  }

  return (
    <div>
      <Title>links</Title>

      <div className="flex flex-wrap gap-4 lowercase">
        <div className="contents" onClick={copyEmailToClipboard}>
          <SocialLink>
            <LucideMail size="20" /> abodenaal@gmail.com
          </SocialLink>
        </div>

        <a href="https://github.com/aziznal" rel="noopener" target="_blank">
          <SocialLink>
            <PixelatedGithub className="size-5" /> Github
          </SocialLink>
        </a>

        <a href="https://medium.com/@aziznal" rel="noopener" target="_blank">
          <SocialLink>
            <PixelatedPen className="size-5" /> Medium
          </SocialLink>
        </a>

        <a
          href="https://linkedin.com/in/abdulaziz-nal"
          rel="noopener"
          target="_blank"
        >
          <SocialLink>
            <PixelatedLinkedin className="size-5" /> LinkedIn
          </SocialLink>
        </a>

        <a href="" rel="noopener" target="_blank">
          <SocialLink>
            <PixelatedArticle className="size-5" /> CV
          </SocialLink>
        </a>
      </div>
    </div>
  )
}
