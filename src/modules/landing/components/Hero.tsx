import { useRef, useState } from 'react'
import { TextType } from '@/lib/components/TextType'
import { LucideX } from 'lucide-react'
import { FuzzyText } from '@/lib/components/FuzzyText'

const AnimationDelays = {
  visitorDetected: () => 0,
  echoTitle: () => AnimationDelays.visitorDetected() + 750,
  title: () => AnimationDelays.echoTitle() + 150,
  subtitle: () => AnimationDelays.title() + 0,

  emptyPrompt: () => AnimationDelays.subtitle() + 1200,
  cat: () => AnimationDelays.emptyPrompt() + 0,
  checkout: () => AnimationDelays.cat() + 200,
  checkout1: () => AnimationDelays.cat() + 800,
  finalCursor: () => AnimationDelays.checkout1() + 400,

  shuttingDown: () => 0,
  shuttingDown1: () => AnimationDelays.shuttingDown() + 1500,
  shuttingDown2: () => AnimationDelays.shuttingDown1() + 1500,
  shuttingDown3: () => AnimationDelays.shuttingDown2() + 600,
  shuttingDown4: () => AnimationDelays.shuttingDown3() + 700,
  shuttingDown5: () => AnimationDelays.shuttingDown4() + 700,
  shuttingDown6: () => AnimationDelays.shuttingDown5() + 400,
} as const

export function Hero(props: { sectionId: string }) {
  const now = useRef(new Date())
  const formattedTime = `${now.current.getHours().toString().padStart(2, '0')}:${now.current.getMinutes().toString().padStart(2, '0')}:${now.current.getSeconds().toString().padStart(2, '0')}`

  const [hasClickedClose, setHasClickedClose] = useState(false)

  return (
    <div
      className="flex flex-col items-center scroll-mt-56 w-full"
      id={props.sectionId}
    >
      <div className="sticky border rounded w-[min(100%,90ch)] backdrop-blur-xs bg-terminal overflow-clip min-h-[25dvh]">
        <div className="bg-secondary px-3 py-0.5 grid grid-cols-3 items-center">
          <div className="flex gap-1">
            <div
              className="h-3 w-3 bg-destructive rounded-full group"
              onClick={() => setHasClickedClose(true)}
            >
              <LucideX className="invisible group-hover:visible text-background stroke-3 w-full h-full" />
            </div>
          </div>

          <span className="text-center text-muted font-mono"> aziznal.sh </span>

          <span />
        </div>

        <div
          className="grid font-lowres leading-[0.6] text-2xl gap-y-2 p-4"
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
            text="whoami"
            delay={AnimationDelays.echoTitle()}
          />

          <div
            className="col-span-2 grid grid-cols-subgrid animate-in fade-in duration-[0ms] fill-mode-both w-full items-start"
            style={{
              transitionDelay: `${AnimationDelays.title()}ms`,
              animationDelay: `${AnimationDelays.title()}ms`,
            }}
          >
            <span />

            <h1 className="text-[5.375rem] text-accent">
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

            <h1 className="text-[1.75rem] text-accent">
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

            <h2 className="text-primary-foreground text-[2rem]">
              <TextType
                text="Welcome, visitor."
                typingSpeed={15}
                cursorCharacter="|"
                initialDelay={AnimationDelays.checkout()}
                cursorBlinkDuration={0.5}
                showCursor={false}
              />
            </h2>
          </div>

          <div
            className="col-span-2 grid grid-cols-subgrid animate-in fade-in duration-[0ms] fill-mode-both w-full items-start"
            style={{
              transitionDelay: `${AnimationDelays.checkout1()}ms`,
              animationDelay: `${AnimationDelays.checkout1()}ms`,
            }}
          >
            <span></span>

            <h2 className="text-primary-foreground text-[2rem]">
              <TextType
                text="Check out my projects below!"
                typingSpeed={15}
                cursorCharacter="|"
                initialDelay={AnimationDelays.checkout1()}
                cursorBlinkDuration={0.5}
                showCursor={false}
              />
            </h2>
          </div>

          {hasClickedClose && (
            <>
              <Type text="" delay={AnimationDelays.shuttingDown()} />

              <Type
                className="text-destructive"
                text="shutting down ..."
                delay={AnimationDelays.shuttingDown()}
              />

              <Type
                className="text-destructive"
                text="attempting shutdown ..."
                delay={AnimationDelays.shuttingDown1()}
              />

              <Type
                className="text-destructive"
                text="it's not ..."
                delay={AnimationDelays.shuttingDown2()}
              />

              <Type
                className="text-destructive"
                text="it's-"
                delay={AnimationDelays.shuttingDown3()}
              />

              <Type
                className="text-destructive"
                text="it's not-"
                delay={AnimationDelays.shuttingDown4()}
              />

              <Type
                className="text-destructive"
                text="it's not shutting down!"
                delay={AnimationDelays.shuttingDown5()}
              />

              <div
                className="col-span-2 animate-in fade-in duration-[0ms] fill-mode-both text-red-500"
                style={{
                  transitionDelay: `${AnimationDelays.shuttingDown6()}ms`,
                  animationDelay: `${AnimationDelays.shuttingDown6()}ms`,
                }}
              >
                <FuzzyText
                  fontSize="2rem"
                  baseIntensity={0.1}
                  className="bg-red-500"
                >
                  exit -1
                </FuzzyText>
              </div>
            </>
          )}

          {!hasClickedClose && (
            <div
              className="col-span-2 grid grid-cols-subgrid animate-in fade-in duration-[0ms] fill-mode-both"
              style={{
                transitionDelay: `${AnimationDelays.finalCursor()}ms`,
                animationDelay: `${AnimationDelays.finalCursor()}ms`,
              }}
            >
              <Prompt />

              <span className="not-focus:animate-blink delay-200">_</span>
            </div>
          )}
        </div>
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
