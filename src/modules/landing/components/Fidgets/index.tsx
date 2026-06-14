import { FidgetButton } from './FidgetButton'
import { Title } from '@/lib/components/ui/Headings'

export function Fidgets() {
  return (
    <div>
      <Title className="mb-0">Fidgets</Title>
      <p className="text-muted text-[1.5rem] font-lowres mb-4">Click around and find out</p>

      <div className="items-center justify-center grid grid-cols-2 gap-4 w-fit">
        <FidgetButton theme="blue"></FidgetButton>
        <FidgetButton theme="red"></FidgetButton>
        <FidgetButton theme="yellow"></FidgetButton>
        <FidgetButton theme="green"></FidgetButton>
      </div>
    </div>
  )
}
