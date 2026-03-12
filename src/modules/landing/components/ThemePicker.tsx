import { cn } from '@/lib/cn'
import { Popover, PopoverContent, PopoverTrigger } from '@/lib/components/ui/Popover'
import { useRef, useState } from 'react'

type Theme = {
  id: 'main' | 'gray' | 'purple'
  primary: string
  accent: string
}

const themes: Record<Theme['id'], Theme> = {
  main: {
    id: 'main',
    primary: 'oklch(54.6% 0.245 262.881)',
    accent: 'oklch(64.6% 0.222 41.116)',
  },
  gray: {
    id: 'gray',
    primary: '#585c63',
    accent: 'oklch(76.8% 0.233 130.85)',
  },

  purple: {
    id: 'purple',
    primary: '#9c00ff',
    accent: '#f5c211',
  },
}

export function ThemePicker() {
  const [selectedTheme, setSelectedTheme] = useState<Theme | undefined>(themes.main)

  const updateColors = (args: Partial<Theme>) => {
    if (args.primary !== undefined) {
      document.documentElement.style.setProperty('--color-primary', args.primary)
    }
    if (args.accent !== undefined) {
      document.documentElement.style.setProperty('--color-accent', args.accent)
    }
  }

  const selectTheme = (theme: Theme) => {
    setSelectedTheme(theme)
    updateColors(theme)
  }

  return (
    <Popover>
      <PopoverTrigger>
        <div className="grid grid-cols-2">
          <div className="h-2 w-2 bg-primary shadow-[2px_2px] shadow-primary/50" />
          <div className="h-2 w-2 bg-accent shadow-[2px_2px] shadow-accent/50" />
          <div className="h-2 w-2 bg-white shadow-[2px_2px] shadow-white/50" />
          <div className="h-2 w-2 bg-green-600 shadow-[2px_2px] shadow-green-600/50" />
        </div>
      </PopoverTrigger>

      <PopoverContent className="max-w-[min(100%,32rem)] w-full text-base flex flex-col gap-8" align="end">
        <div>
          <h2 className="text-lg mb-3">Preset themes</h2>

          <div className="flex flex-wrap gap-4">
            <ThemePreset
              themeId="main"
              isSelected={selectedTheme?.id === 'main'}
              onClick={() => selectTheme(themes['main'])}
            />

            <ThemePreset
              themeId="gray"
              isSelected={selectedTheme?.id === 'gray'}
              onClick={() => selectTheme(themes['gray'])}
            />

            <ThemePreset
              themeId="purple"
              isSelected={selectedTheme?.id === 'purple'}
              onClick={() => selectTheme(themes['purple'])}
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg mb-3">Manual controls</h2>

          <div className="flex flex-col gap-2">
            <ThemeTrigger
              name="primary"
              color="bg-primary"
              onColorChanged={(primary) => {
                updateColors({ primary })
                setSelectedTheme(undefined)
              }}
            />

            <ThemeTrigger
              name="accent"
              color="bg-accent"
              onColorChanged={(accent) => {
                updateColors({ accent })
                setSelectedTheme(undefined)
              }}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

function ThemePreset(props: { themeId: Theme['id']; onClick: () => void; isSelected: boolean }) {
  return (
    <div
      className={cn(
        'outline outline-border/30 w-20 aspect-square flex flex-col items-center justify-center text-center text-xl font-lowres rounded p-2 hover:bg-primary/10 cursor-pointer',
        props.isSelected && 'outline outline-primary',
      )}
      onClick={props.onClick}
    >
      <div className="grid grid-cols-2">
        <div className="w-3 h-3" style={{ backgroundColor: themes[props.themeId].primary }} />
        <div className="w-3 h-3" style={{ backgroundColor: themes[props.themeId].accent }} />
      </div>

      <span>{props.themeId}</span>
    </div>
  )
}

function ThemeTrigger(props: { name: string; color: string; onColorChanged: (value: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div
      className="flex gap-3 font-lowres text-xl cursor-pointer hover:brightness-80"
      onClick={() => inputRef.current?.click()}
    >
      <div className={cn('rounded w-6 h-6 ', props.color)}>
        <input
          className="invisible w-full h-full"
          type="color"
          onChange={(e) => props.onColorChanged(e.target.value)}
          ref={inputRef}
        />
      </div>

      <span>{props.name}</span>
    </div>
  )
}
