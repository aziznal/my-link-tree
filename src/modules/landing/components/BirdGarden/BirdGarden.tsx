import { cn } from '@/lib/cn'
import {
  AsciiFlower1,
  AsciiFlower2,
  AsciiFlower3,
  AsciiFlower4,
  AsciiFlower5,
  AsciiFlower6,
  AsciiFlower7,
  AsciiFlower8,
} from './AsciiArt/AsciiFlowers'
import { AsciiGrass } from './AsciiArt/AsciiGrass'
import { AsciiHeart } from './AsciiArt/AsciiHeart'
import { AsciiJack } from './AsciiArt/AsciiJack'
import { AsciiJackName } from './AsciiArt/AsciiJackName'
import { AsciiKiro } from './AsciiArt/AsciiKiro'
import { AsciiKiroName } from './AsciiArt/AsciiKiroName'
import { AsciiKiwiLeo } from './AsciiArt/AsciiKiwiLeo'
import { AsciiKiwiName } from './AsciiArt/AsciiKiwiName'
import { AsciiLeoName } from './AsciiArt/AsciiLeoName'
import { AsciiLulu } from './AsciiArt/AsciiLulu'
import { AsciiLuluName } from './AsciiArt/AsciiLuluName'
import { AsciiShidori } from './AsciiArt/AsciiShidori'
import { AsciiShidoriName } from './AsciiArt/AsciiShidoriName'
import { AsciiShiro } from './AsciiArt/AsciiShiro'
import { AsciiShiroName } from './AsciiArt/AsciiShiroName'
import { AsciiStars } from './AsciiArt/AsciiStars'
import './styles.css'

export function BirdGarden({ className }: { className?: string }) {
  return (
    <div className={cn('font-bold mx-auto text-[min(1.1dvw,16px)] w-full', className)}>
      <div className="flex items-end justify-center -mb-[1.6em]">
        <section className="flex items-end ms-[1.5em] shrink-0">
          <div className="flex flex-col items-center pe-[.75em]">
            <AsciiKiro className="text-[0.0625em]" />
            <AsciiKiroName className="text-[0.125em] ps-[2em]" />
          </div>

          <div className="flex flex-col items-center pb-[1em]">
            <AsciiJack className="text-[0.125em]" />
            <AsciiJackName className="text-[0.125em]" />
          </div>

          <div className="flex flex-col items-center pb-[3.25em] -ms-[0.5em]">
            <AsciiShidori className="text-[0.125em]" />
            <AsciiShidoriName className="text-[0.125em]" />
          </div>
        </section>

        <section className="flex flex-col gap-[0.5em] isolate relative -ms-[3em]">
          <AsciiStars
            className="stars text-[.825em] text-[#5F69FF] absolute left-[50%] top-0 translate-x-[-50%] z-[-1]"
            style={{ '--from': '-24em' } as React.CSSProperties}
          />

          <div className="text-center flex flex-col gap-[1em] items-center">
            <AsciiShiroName className="text-[0.4375em]" />

            <p className="font-lowres">2019 - 2024</p>
          </div>

          <div className="grid place-items-center">
            <AsciiShiro className="text-[0.1125em] rotate-y-180 row-[1] col-[1] pr-[3em]" />
            <AsciiHeart className="hover text-[0.9375em] text-[red]/40 row-[1] col-[1] pb-[9em]" />
          </div>
        </section>

        <section className="flex items-end -ms-[2em] mb-[1.75em]">
          <div className="flex flex-col items-center pb-[1em]">
            <AsciiLulu className="text-[0.125em]" />
            <AsciiLuluName className="text-[0.125em]" />
          </div>

          <div className="flex flex-col items-center relative -ms-[2.5em]">
            <AsciiKiwiLeo className="text-[0.125em]" />
            <AsciiKiwiName className="text-[0.125em] absolute bottom-[-15%] left-[10%]" />
            <AsciiLeoName className="text-[0.125em] absolute bottom-[-30%] right-[15%]" />
          </div>
        </section>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-end z-[2] -mb-[2.1em]">
          <div className="blow-in-breeze flex items-end">
            <AsciiFlower7 className="text-[.6875em] text-[#FDEA0A] rotate-y-180" />
            <AsciiFlower6 className="text-[.6875em] text-[#FDEA0A] rotate-y-180" />
            <AsciiFlower5 className="text-[.6875em] text-[#FDEA0A] rotate-y-180" />
            <AsciiFlower3 className="text-[.6875em] text-[#dc81ff] rotate-y-180" />
            <AsciiFlower4 className="text-[.6875em] text-[#dc81ff] rotate-y-180" />
            <AsciiFlower1 className="text-[.6875em] text-[#8ea6f6] rotate-y-180" />
            <AsciiFlower2 className="text-[.6875em] text-[#8ea6f6] rotate-y-180" />
            <AsciiFlower2 className="text-[.6875em] text-[#8ea6f6] rotate-y-180" />
            <AsciiFlower8 className="text-[.40625em] text-[#ef3939] rotate-y-180" />
          </div>

          <div className="w-[2em]" />

          <div className="blow-in-breeze flex items-end">
            <AsciiFlower8 className="text-[.40625em] text-[#ef3939]" />
            <AsciiFlower2 className="text-[.6875em] text-[#8ea6f6]" />
            <AsciiFlower2 className="text-[.6875em] text-[#8ea6f6]" />
            <AsciiFlower1 className="text-[.6875em] text-[#8ea6f6]" />
            <AsciiFlower4 className="text-[.6875em] text-[#dc81ff]" />
            <AsciiFlower3 className="text-[.6875em] text-[#dc81ff]" />
            <AsciiFlower5 className="text-[.6875em] text-[#FDEA0A]" />
            <AsciiFlower6 className="text-[.6875em] text-[#FDEA0A]" />
            <AsciiFlower7 className="text-[.6875em] text-[#FDEA0A]" />
          </div>
        </div>

        <div className="flex flex-col items-center z-[1]">
          <AsciiGrass className="blow-in-breeze text-[.4875em] text-[#54D43D] opacity-10" />
          <AsciiGrass className="blow-in-breeze text-[.5375em] text-[#54D43D] opacity-20" />
          <AsciiGrass className="blow-in-breeze text-[.5875em] text-[#54D43D] opacity-30" />
          <AsciiGrass className="blow-in-breeze text-[.6375em] text-[#54D43D] opacity-50" />
          <AsciiGrass className="blow-in-breeze text-[.6875em] text-[#54D43D]" />
        </div>
      </div>
    </div>
  )
}
