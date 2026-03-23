import { cn } from '@/lib/cn'
import ascii from './shiro-name.txt?raw'

export function AsciiShiroName({ className }: { className?: string }) {
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
