import { createFileRoute } from '@tanstack/react-router'
import { LandingPage } from '@/modules/landing/components/Page'

export const Route = createFileRoute('/')({
  component: LandingPage,
})
