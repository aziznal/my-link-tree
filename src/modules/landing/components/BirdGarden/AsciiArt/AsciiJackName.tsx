import { cn } from '@/lib/cn'
import ascii from './jack-name.txt?raw'

export function AsciiJackName({ className }: { className?: string }) {
  return (
    <pre
      className={cn('block', className)}
      style={{
        margin: 0,
        whiteSpace: 'pre',
        fontFamily: 'monospace',
        lineHeight: 1,
      }}
    >
      {ascii}
    </pre>
  )
}
