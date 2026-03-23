import { cn } from '@/lib/cn'
import ascii from './grass.txt?raw'
import { CSSProperties } from 'react'

export function AsciiGrass({ className, style }: { className?: string; style?: CSSProperties }) {
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
