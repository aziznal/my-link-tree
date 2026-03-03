/** Thanks to Josh Comeau's whimsical animations course */

type Point = { x: number; y: number }

export const getDistanceBetweenPoints = (p1: Point, p2: Point): number => {
  const deltaX = p2.x - p1.x
  const deltaY = p2.y - p1.y

  return Math.sqrt(deltaX ** 2 + deltaY ** 2)
}

export const clamp = (
  value: number,
  min: number = 0,
  max: number = 1,
): number => {
  if (min > max) {
    ;[min, max] = [max, min]
  }

  return Math.max(min, Math.min(max, value))
}

export const normalize = (
  number: number,
  currentScaleMin: number,
  currentScaleMax: number,
  newScaleMin: number = 0,
  newScaleMax: number = 1,
): number => {
  const standardNormalization =
    (number - currentScaleMin) / (currentScaleMax - currentScaleMin)

  return (newScaleMax - newScaleMin) * standardNormalization + newScaleMin
}

export const clampedNormalize = (
  value: number,
  currentScaleMin: number,
  currentScaleMax: number,
  newScaleMin: number = 0,
  newScaleMax: number = 1,
): number => {
  return clamp(
    normalize(
      value,
      currentScaleMin,
      currentScaleMax,
      newScaleMin,
      newScaleMax,
    ),
    newScaleMin,
    newScaleMax,
  )
}

export function checkPrefersReducedMotion() {
  return !window.matchMedia(
    '(prefers-reduced-motion: no-preference)'
  ).matches;
}
