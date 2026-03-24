import { Title } from '@/lib/components/ui/Headings'
import { SocialLink } from '@/lib/components/SocialLink'
import { LucideCheck, LucideCopy, LucideMail } from 'lucide-react'
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
        <div
          className="cursor-pointer group/email"
          onClick={copyEmailToClipboard}
          tabIndex={0}
          onKeyDown={(e) => {
            if (!['Enter', ' '].includes(e.key)) return
            e.preventDefault()
            e.stopPropagation()
            copyEmailToClipboard()
          }}
        >
          <SocialLink>
            <LucideMail className="size-5 fill-none text-muted" /> abodenaal at gmail dot com{' '}
            <LucideCopy className="fill-none size-4 group-focus-within/email:hidden" />
            <LucideCheck className="hidden fill-none size-4 text-green-500 group-focus-within/email:inline" />
          </SocialLink>
        </div>

        <a href="https://github.com/aziznal" rel="noopener" target="_blank">
          <SocialLink>
            <PixelatedGithub className="size-5 text-muted" /> Github
          </SocialLink>
        </a>

        <a href="https://medium.com/@aziznal" rel="noopener" target="_blank">
          <SocialLink>
            <PixelatedPen className="size-5 text-muted" /> Medium
          </SocialLink>
        </a>

        <a href="https://linkedin.com/in/abdulaziz-nal" rel="noopener" target="_blank">
          <SocialLink>
            <PixelatedLinkedin className="size-5 text-muted" /> LinkedIn
          </SocialLink>
        </a>

        <a href="/CV.pdf" rel="noopener" target="_blank">
          <SocialLink>
            <PixelatedArticle className="size-5 text-muted" /> CV
          </SocialLink>
        </a>
      </div>
    </div>
  )
}
