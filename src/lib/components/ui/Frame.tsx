import { cn } from '@/lib/cn'
import { PropsWithChildren } from 'react'

export function Frame(props: { className?: string } & PropsWithChildren) {
  return (
    <div className={cn('box-content border-3 p-6 rounded', props.className)}>
      {props.children}
    </div>
  )
}
