import { cn } from '@/lib/cn'
import ascii from './stars.txt?raw'

export function AsciiStars({ className, style }: { className?: string; style: React.CSSProperties }) {
  return (
    <pre
      className={cn('block', className)}
      style={{
        margin: 0,
        whiteSpace: 'pre',
        fontFamily: 'monospace',
        lineHeight: 1,
        ...style,
      }}
    >
      {ascii}
    </pre>
  )
}
