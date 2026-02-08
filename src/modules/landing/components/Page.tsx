import { Hero } from './Hero'
import { Projects } from './Projects'
import { SocialLinks } from './SocialLinks'

export function LandingPage() {
  return (
    <div className="min-h-dvh container pb-24">
      <div className="mb-8">
        <Hero />
      </div>

      <div className="mb-12">
        <SocialLinks />
      </div>

      <Projects />
    </div>
  )
}
