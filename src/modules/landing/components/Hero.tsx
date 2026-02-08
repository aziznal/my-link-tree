import { useRef } from 'react'
import { TextType } from '@/lib/components/TextType'

const AnimationDelays = {
  visitorDetected: () => 0,
  echoTitle: () => AnimationDelays.visitorDetected() + 1500/2,
  title: () => AnimationDelays.echoTitle() + 300/2,
  subtitle: () => AnimationDelays.title() + 0,

  emptyPrompt: () => AnimationDelays.subtitle() + 1200/2,
  cat: () => AnimationDelays.emptyPrompt() + 0,
  checkout: () => AnimationDelays.cat() + 400/2,
  finalCursor: () => AnimationDelays.checkout() + 500/2,
} as const

export function Hero() {
  const now = useRef(new Date())
  const formattedTime = `${now.current.getHours().toString().padStart(2, '0')}:${now.current.getMinutes().toString().padStart(2, '0')}:${now.current.getSeconds().toString().padStart(2, '0')}`

  return (
    <div className="border rounded-lg mt-24 max-w-[80ch]">
      <div className="bg-secondary rounded-t-lg px-3 py-0.5 grid grid-cols-3 items-center">
        <div className="flex gap-1">
          <div className="h-[12px] w-[12px] bg-secondary rounded-full" />
        </div>

        <span className="text-center text-muted font-mono"> aziznal.sh </span>

        <span />
      </div>

      <div
        className="grid font-lowres leading-[0.6] text-[24px] gap-y-2 p-4"
        style={{
          gridTemplateColumns: '3ch auto',
        }}
      >
        <Type
          className="text-muted"
          text={`${formattedTime} visitor detected - booting up ...`}
          delay={AnimationDelays.visitorDetected()}
        />
        <Type
          className="text-muted"
          text='whoami'
          delay={AnimationDelays.echoTitle()}
        />

        <div
          className="col-span-2 grid grid-cols-subgrid animate-in fade-in duration-[0ms] fill-mode-both w-full items-start"
          style={{
            transitionDelay: `${AnimationDelays.title()}ms`,
            animationDelay: `${AnimationDelays.title()}ms`,
          }}
        >
          <span/>

          <h1 className="text-[86px] text-accent text-shadow-lg text-shadow-accent/30 font-bold">
            <TextType
              text="Aziz Nal"
              typingSpeed={35}
              cursorCharacter="|"
              initialDelay={AnimationDelays.title()}
              cursorBlinkDuration={0.5}
              showCursor={false}
            />
          </h1>
        </div>

        <div
          className="col-span-2 grid grid-cols-subgrid animate-in fade-in duration-[0ms] fill-mode-both w-full items-start"
          style={{
            transitionDelay: `${AnimationDelays.subtitle()}ms`,
            animationDelay: `${AnimationDelays.subtitle()}ms`,
          }}
        >
          <span></span>

          <h1 className="text-[28px] text-accent font-bold text-shadow-lg text-shadow-accent/30">
            <TextType
              text="Web Developer - Designer - Huge Nerd"
              typingSpeed={10}
              cursorCharacter="|"
              initialDelay={AnimationDelays.subtitle()}
              cursorBlinkDuration={0.5}
              showCursor={false}
            />
          </h1>
        </div>

        <Type
          className="text-muted"
          text=""
          delay={AnimationDelays.emptyPrompt()}
        />

        <Type
          className="text-muted"
          text="cat ./welcome.txt"
          delay={AnimationDelays.cat()}
        />

        <div
          className="col-span-2 grid grid-cols-subgrid animate-in fade-in duration-[0ms] fill-mode-both w-full items-start"
          style={{
            transitionDelay: `${AnimationDelays.subtitle()}ms`,
            animationDelay: `${AnimationDelays.subtitle()}ms`,
          }}
        >
          <span></span>

          <h1 className="text-primary text-[32px] text-shadow-lg text-shadow-primary/30">
            <TextType
              text="Welcome visitor. Check out my projects below."
              typingSpeed={10}
              cursorCharacter="|"
              initialDelay={AnimationDelays.checkout()}
              cursorBlinkDuration={0.5}
              showCursor={false}
            />
          </h1>
        </div>

        <Type
          className=""
          text=""
          delay={AnimationDelays.finalCursor()}
          blinkingCursor
        />
      </div>
    </div>
  )
}

function Type(props: {
  text: string
  delay: number
  className?: string
  prompt?: boolean
  blinkingCursor?: boolean
}) {
  if (props.prompt === false) {
    return (
      <div
        className="col-span-2 animate-in fade-in duration-[0ms] fill-mode-both"
        style={{
          transitionDelay: `${props.delay}ms`,
          animationDelay: `${props.delay}ms`,
        }}
      >
        <TextType
          className={props.className}
          text={props.text}
          typingSpeed={15}
          initialDelay={props.delay}
          showCursor={props.blinkingCursor === true}
          cursorBlinkDuration={0.6}
          cursorCharacter="_"
        />
      </div>
    )
  }

  return (
    <div
      className="grid grid-cols-subgrid col-span-2 animate-in fade-in duration-[0ms] fill-mode-both"
      style={{
        transitionDelay: `${props.delay}ms`,
        animationDelay: `${props.delay}ms`,
      }}
    >
      <Prompt />

      <TextType
        className={props.className}
        text={props.text}
        typingSpeed={15}
        initialDelay={props.delay}
        showCursor={props.blinkingCursor === true}
        cursorBlinkDuration={0.6}
        cursorCharacter="_"
      />
    </div>
  )
}

function Prompt() {
  return <span className="text-muted">{`$> `}</span>
}
