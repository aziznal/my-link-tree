import { memo, useEffect, useRef } from 'react'
import {
  checkPrefersReducedMotion,
  clampedNormalize,
  getDistanceBetweenPoints,
} from '../animation-utils'
import { clamp, springValue } from 'motion'

const VIEWBOX_SIZE = 3000
const CIRCLE_COUNT = 1200
const CIRCLE_RADIUS = 2

const Component = () => {
  const svgRef = useRef<SVGSVGElement>(null)

  // create grid of cricles
  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    // Clear previous render (safety if component ever re-mounts)
    svg.innerHTML = ''

    const gridSize = Math.ceil(Math.sqrt(CIRCLE_COUNT))
    const totalCircles = gridSize * gridSize
    const diameter = CIRCLE_RADIUS * 2

    const totalCirclesSize = gridSize * diameter
    const spacing = (VIEWBOX_SIZE - totalCirclesSize) / (gridSize + 1)

    for (let i = 0; i < totalCircles; i++) {
      const row = Math.floor(i / gridSize)
      const col = i % gridSize

      const cx = spacing + col * (diameter + spacing) + CIRCLE_RADIUS
      const cy = spacing + row * (diameter + spacing) + CIRCLE_RADIUS

      const circle = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'circle',
      )

      circle.setAttribute('cx', String(cx))
      circle.setAttribute('cy', String(cy))
      circle.setAttribute('r', String(CIRCLE_RADIUS))
      circle.setAttribute('fill', 'var(--color-decoration)')

      svg.appendChild(circle)
    }
  }, [])

  // animate on cursor move
  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const prefersReducedMotion = checkPrefersReducedMotion()
    if (prefersReducedMotion) return

    const circles = [...svg.querySelectorAll('circle')].map((circle) => ({
      // assigning here so ref is stable
      springRadius: springValue<number>(CIRCLE_RADIUS, {
        stiffness: 300,
        damping: 20,
      }),
      element: circle,
    }))

    // update circle radius everytime its springRadius is updated (motion requirement)
    circles.forEach((circle) => {
      circle.springRadius.on('change', (v) =>
        circle.element.setAttribute(
          'r',
          `${clamp(0, Number.POSITIVE_INFINITY, v)}`,
        ),
      )
    })

    function handleCursorMove(event: PointerEvent) {
      const svg = svgRef.current
      if (!svg) return

      // this function keeps things accurate despite modifications to preserveAspectRatio
      const ctm = svg.getScreenCTM()
      if (!ctm) return

      const cursorPoint = new DOMPoint(event.clientX, event.clientY)
      const cursorInSvg = cursorPoint.matrixTransform(ctm.inverse())

      // mapped to viewbox coords
      const cursor = { x: cursorInSvg.x, y: cursorInSvg.y }

      circles.forEach((circle) => {
        const circleCenter = {
          x: Number(circle.element.getAttribute('cx') ?? 0),
          y: Number(circle.element.getAttribute('cy') ?? 0),
        }

        const distance = getDistanceBetweenPoints(cursor, circleCenter)

        const radius = clampedNormalize(
          distance,
          0,
          500,
          CIRCLE_RADIUS * 50,
          CIRCLE_RADIUS,
        )

        circle.springRadius.set(radius)
      })
    }

    window.addEventListener('pointermove', handleCursorMove)

    return () => window.removeEventListener('pointermove', handleCursorMove)
  }, [])

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
      className="absolute inset-0 h-dvh w-full"
      preserveAspectRatio="xMidYMin slice"
      style={{
        maskImage:
          'linear-gradient(to bottom, transparent 5%, black 20%, black 50%, transparent 85%)',
        WebkitMaskImage:
          'linear-gradient(to bottom, transparent 5%, black 20%, black 50%, transparent 85%)',
      }}
    />
  )
}

export const AnimatedBackground = memo(Component)
