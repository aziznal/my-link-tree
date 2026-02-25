import { cn } from '../../cn'

export function PixelatedChevron(props: { className?: string }) {
  return (
    <svg
      className={cn('-rotate-90 size-4 inline-block', props.className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
    >
      <rect x="1" y="3" width="2" height="2" />
      <rect x="3" y="5" width="2" height="2" />
      <rect x="5" y="7" width="2" height="2" />
      <rect x="7" y="9" width="2" height="2" />
      <rect x="9" y="7" width="2" height="2" />
      <rect x="11" y="5" width="2" height="2" />
      <rect x="13" y="3" width="2" height="2" />
    </svg>
  )
}
