import * as Tone from 'tone'
import { useEffect, useState } from 'react'
import { LucidePower } from 'lucide-react'
import { Resources } from '@/lib/resources'
import { cn } from '@/lib/cn'

const sound_humGain = new Tone.Gain(0).toDestination()
const sound_hum = new Tone.Player({
  url: Resources.audio.monitorHum,
  loop: true,
  loopStart: 0.35, // seconds into the file where the looped segment begins
  loopEnd: 3.7, // seconds into the file where the looped segment ends
}).connect(sound_humGain)
const FADE_IN_SECONDS = 5
const FADE_OUT_SECONDS = 0.15

export function CRTDisplay() {
  const [isMonitorOn, setIsMonitorOn] = useState<boolean>(false)
  const toggleOn = async () => {
    await Tone.start()
    await Tone.loaded()

    // hum is how we control if hum is playing cleanly and without glitches or hiccups
    // we load it once.
    if (sound_hum.state !== 'started') {
      sound_hum.start(undefined, 1)
    }

    setIsMonitorOn((isOn) => {
      // to make reading a little easier
      const isTurningOn = !isOn

      if (isTurningOn) {
        sound_humGain.gain.rampTo(0.5, FADE_IN_SECONDS)
      } else {
        sound_humGain.gain.rampTo(0, FADE_OUT_SECONDS)
      }

      return !isOn
    })
  }

  return (
    <div className="flex flex-col items-center w-[24rem] relative">
      <img src={Resources.images.crtDisplay} />

      <svg
        className={cn(
          'opacity-0 absolute w-[18.625rem] top-[11%] transition-opacity fill-mode-forwards duration-200',
          isMonitorOn && 'opacity-100 duration-10000 fill-cyan-200',
        )}
        viewBox="0 0 637 471"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M614.156 10.344C454.78 -7.26558 177.754 1.36391 23.062 8.79179C15.2467 9.16706 8.88594 15.1289 8.08856 22.9124C-7.50339 175.112 3.33457 378.515 8.48956 446.928C9.069 454.618 15.0627 460.653 22.7453 461.322C206.871 477.347 483.461 468.231 613.441 460.883C621.104 460.45 627.338 454.681 628.162 447.05C639.493 342.187 638.627 133.885 627.928 24.2955C627.209 16.9368 621.505 11.156 614.156 10.344Z" />
      </svg>

      <div className="absolute bottom-[20%] right-[10%] scale-[50%] flex items-center">
        <MainPowerButton isOn={isMonitorOn} onClick={toggleOn} />
      </div>
    </div>
  )
}

const sound_clickDown = new Tone.Player(Resources.audio.monitorClickDown).toDestination()
const sound_clickUp = new Tone.Player(Resources.audio.monitorClickUp).toDestination()

function MainPowerButton(props: { onClick?: () => void; isOn: boolean }) {
  const handleClickDown = () => {
    if (props.isOn) {
      sound_clickUp.start(0)
    } else {
      sound_clickDown.start(0)
    }
    props.onClick?.()
  }

  const handleClickUp = () => {
    if (props.isOn) {
      sound_clickUp.start(0)
    } else {
      sound_clickDown.start(0)
    }
  }

  const [isLightOn, setIsLightOn] = useState<boolean>(false)
  useEffect(function cycleOnOff() {
    if (props.isOn) {
      // keep on and stop cycling
      setIsLightOn(true)
      return
    }

    const interval = setInterval(() => {
      setIsLightOn((s) => !s)
    }, 1_000)

    return () => clearInterval(interval)
  })

  return (
    <div
      className={cn(
        'shadow-[0px_8px] has-active:shadow-[0px_0px] w-fit rounded-full has-active:translate-y-[8px] transition-[translate] shadow-[oklch(from_#CEC7BC_70%_c_h)]',
        isLightOn && 'shadow-amber-400',
        props.isOn && 'translate-y-[4px] shadow-[0px_4px] has-active:translate-y-[5px]',
      )}
      style={{
        transitionTimingFunction:
          'linear(0, 0.029 0.8%, 0.13 1.8%, 0.908 7.2%, 1.051 9.1%, 1.112 11.2%, 1.116 12.2%, 1.106 13.4%, 1.007 19.5%, 0.987 23.1%, 1.001 35%, 1)',
        transitionDuration: '1s',
      }}
    >
      <button
        className={cn(
          'transition-all rounded-full cursor-pointer font-bold bg-[oklch(from_#CEC7BC_90%_c_h)] size-[2.5rem] shrink-0 flex items-center justify-center',
        )}
        onPointerDown={handleClickDown}
        onPointerUp={handleClickUp}
      >
        <LucidePower className={cn('text-black fill-none size-[1.65rem] shrink-0', isLightOn && 'text-amber-600')} />
      </button>
    </div>
  )
}
