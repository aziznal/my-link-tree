import { LandingPage } from '@/modules/landing/components/Page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: LandingPage,
})


