import { round } from './round'

export function random(start: number, end: number) {
  if (!Number.isFinite(start) || !Number.isFinite(end)) {
    throw new TypeError('start/end must be finite numbers')
  }
  if (end <= start) {
    throw new RangeError('end must be greater than start')
  }

  return Math.floor(Math.random() * (end - start)) + start
}

export function randomFloat(start: number, end: number) {
  if (!Number.isFinite(start) || !Number.isFinite(end)) {
    throw new TypeError('start/end must be finite numbers')
  }
  if (end <= start) {
    throw new RangeError('end must be greater than start')
  }

  return round(Math.random() * (end - start), 2) + start
}
