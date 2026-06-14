import * as Tone from 'tone'
import { useRef, useState } from 'react'
import { cn } from '@/lib/cn'
import { Resources } from '@/lib/resources'
import { randomFloat } from '@/lib/random'

export function KeyboardButton(props: { children?: React.ReactNode }) {
  const clickDownSound = useRef(new Tone.Player(Resources.audio.keyDown).toDestination())
  const clickUpSound = useRef(new Tone.Player(Resources.audio.keyUp).toDestination())

  const [goDownOnHover, setGoDownOnHover] = useState(false)

  const handleClickDown = () => {
    clickDownSound.current.playbackRate = randomFloat(0.8, 1)
    clickDownSound.current.start(0)
  }

  const handleClickUp = () => {
    clickUpSound.current.start(0)
  }

  const handlePointerOver = (e: React.PointerEvent) => {
    const LEFT_CLICK = 1

    // if cursor is being held down, then hold down self
    if (e.buttons !== LEFT_CLICK) {
      setGoDownOnHover(false)
      return
    }

    setGoDownOnHover(true)
    clickDownSound.current.playbackRate = randomFloat(0.8, 1)
    clickDownSound.current.start(0)
  }

  const handlePointerLeave = (e: React.PointerEvent) => {
    const LEFT_CLICK = 1

    // if cursor is being held down, then hold down self
    if (e.buttons !== LEFT_CLICK) {
      setGoDownOnHover(false)
      return
    }

    setGoDownOnHover(true)
    clickUpSound.current.playbackRate = randomFloat(0.8, 1)
    clickUpSound.current.start(0)
  }

  return (
    <div
      className={cn(
        'shadow-gray-500 shadow-[0px_8px_0px_4px] rounded-lg transition-all size-fit select-none',
        !goDownOnHover && 'has-active:shadow-[0px_4px_1px_3px] has-active:translate-y-[8px]',
        goDownOnHover && 'hover:shadow-[0px_4px_1px_3px] hover:translate-y-[8px]',
      )}
      style={{
        transitionTimingFunction:
          'linear(0, 0.029 0.8%, 0.13 1.8%, 0.908 7.2%, 1.051 9.1%, 1.112 11.2%, 1.116 12.2%, 1.106 13.4%, 1.007 19.5%, 0.987 23.1%, 1.001 35%, 1)',
        transitionDuration: '700ms',
      }}
    >
      <button
        className={cn('text-black w-[3.5rem] transition-all rounded-lg cursor-pointer font-bold py-3 px-5 bg-gray-100')}
        onPointerDown={handleClickDown}
        onPointerUp={handleClickUp}
        onPointerOver={handlePointerOver}
        onPointerLeave={handlePointerLeave}
      >
        {props.children}
      </button>
    </div>
  )
}
