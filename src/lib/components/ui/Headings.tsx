import { cn } from '../../cn'

type HeadingProps = {
  children: React.ReactNode
  className?: string
  withHorizontalRule?: boolean
}

export function Title({
  children,
  className,
  withHorizontalRule,
}: HeadingProps) {
  return (
    <>
      <h1
        className={cn(
          'mb-4 min-h-fit text-[2.375rem] sm:text-[2.625rem] font-lowres text-glow-sm',
          withHorizontalRule && 'mb-2',
          className,
        )}
      >
        {children}
      </h1>

      {withHorizontalRule && <hr className="mb-4" />}
    </>
  )
}

export function Subtitle({
  children,
  className,
  withHorizontalRule,
}: HeadingProps) {
  return (
    <>
      <h2
        className={cn(
          'mb-1 min-h-fit text-[1.375rem] sm:text-[1.875rem] font-lowres text-glow-sm',
          withHorizontalRule && 'mb-2',
          className,
        )}
      >
        {children}
      </h2>

      {withHorizontalRule && <hr className="mb-4" />}
    </>
  )
}
