import { cn } from '@/lib/cn'

const clickDownSound = new Audio('/audio/click-sound-down.mp3')
clickDownSound.preload = 'auto'

const clickUpSound = new Audio('/audio/click-sound-up.mp3')
clickUpSound.preload = 'auto'

const themes = {
  red: {
    shadow: 'shadow-red-950',
    buttonBg: 'bg-rose-500',
    buttonHoverBg: 'hover:bg-rose-400',
    buttonText: 'text-rose-950',
  },
  green: {
    shadow: 'shadow-emerald-950',
    buttonBg: 'bg-emerald-500',
    buttonHoverBg: 'hover:bg-emerald-400',
    buttonText: 'text-emerald-950',
  },
  yellow: {
    shadow: 'shadow-amber-950',
    buttonBg: 'bg-amber-500',
    buttonHoverBg: 'hover:bg-amber-400',
    buttonText: 'text-amber-950',
  },
  blue: {
    shadow: 'shadow-blue-950',
    buttonBg: 'bg-blue-500',
    buttonHoverBg: 'hover:bg-blue-400',
    buttonText: 'text-blue-950',
  },
}

export function FidgetButton(props: { children?: React.ReactNode; theme: keyof typeof themes }) {
  const handleClickDown = () => {
    clickDownSound.currentTime = 0
    clickDownSound.play()
  }

  const handleClickUp = () => {
    clickUpSound.currentTime = 0
    clickUpSound.play()
  }

  return (
    <div
      className={cn(
        'shadow-[0px_8px] has-active:shadow-[0px_0px] w-fit rounded-full has-active:translate-y-[8px] transition-all',
        themes[props.theme].shadow,
      )}
      style={{
        transitionTimingFunction:
          'linear(0, 0.029 0.8%, 0.13 1.8%, 0.908 7.2%, 1.051 9.1%, 1.112 11.2%, 1.116 12.2%, 1.106 13.4%, 1.007 19.5%, 0.987 23.1%, 1.001 35%, 1)',
        transitionDuration: '1s',
      }}
    >
      <button
        className={cn(
          'transition-all rounded-full cursor-pointer font-bold p-6',
          themes[props.theme].buttonBg,
          themes[props.theme].buttonText,
          `hover:${themes[props.theme].buttonHoverBg}`,
        )}
        onPointerDown={handleClickDown}
        onPointerUp={handleClickUp}
      >
        {props.children}
      </button>
    </div>
  )
}
