import { cn } from '@/lib/cn'
import { useEffect, useState } from 'react'

export const SECTIONS = [{ id: 'home' }, { id: 'about' }, { id: 'projects' }]

export function Menu() {
  const [activeSectionId, setActiveSectionId] = useState(SECTIONS[0].id)

  /** track active section based on scroll */
  const HEADER_OFFSET = 200
  useEffect(() => {
    const sectionIds = SECTIONS.map((s) => s.id)

    const updateActiveSection = () => {
      const scrollY = window.scrollY + HEADER_OFFSET + 1

      let currentId: string | null = null

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue

        const elementTop = window.scrollY + el.getBoundingClientRect().top

        // as long as the section's top is above our "line", it's a candidate
        if (elementTop <= scrollY) {
          currentId = id
        } else {
          // sections are in DOM order, so we can break early
          break
        }
      }

      if (currentId && currentId !== activeSectionId) {
        setActiveSectionId(currentId)
      }
    }

    updateActiveSection()

    const onScroll = () => {
      updateActiveSection()
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [activeSectionId, setActiveSectionId])

  return (
    <>
      {SECTIONS.map((s) => (
        <a className="contents" href={`#${s.id}`} key={`navmenu-item-${s.id}`}>
          <MenuItem text={s.id} isSelected={activeSectionId === s.id} />{' '}
        </a>
      ))}
    </>
  )
}

function MenuItem(props: { text: string; isSelected?: boolean }) {
  return (
    <p
      className={cn(
        'leading-none px-1',
        !props.isSelected &&
          'cursor-pointer',
        props.isSelected && 'bg-foreground text-background',
      )}
    >
      {props.text}
    </p>
  )
}
