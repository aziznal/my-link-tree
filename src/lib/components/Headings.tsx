import { cn } from '../cn'

type HeadingProps = {
  children: React.ReactNode
  className?: string
  withHorizontalRule?: boolean
}

export function H1({ children, className, withHorizontalRule }: HeadingProps) {
  return (
    <>
      <h1
        className={cn(
          'mb-4 min-h-fit text-3xl font-bold sm:text-4xl',
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

export function H2({ children, className, withHorizontalRule }: HeadingProps) {
  return (
    <>
      <h2
        className={cn(
          'mb-4 min-h-fit text-2xl font-bold sm:text-3xl',
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

export function H3({ children, className, withHorizontalRule }: HeadingProps) {
  return (
    <>
      <h3
        className={cn(
          'mb-4 min-h-fit text-xl font-bold sm:text-2xl',
          withHorizontalRule && 'mb-2',
          className,
        )}
      >
        {children}
      </h3>

      {withHorizontalRule && <hr className="mb-4" />}
    </>
  )
}

export function SectionTitle({
  children,
  className,
  withHorizontalRule,
}: HeadingProps) {
  return (
    <>
      <h2
        className={cn(
          'mb-4 min-h-fit text-[2.375rem] sm:text-[42px] font-lowres text-glow-sm',
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
