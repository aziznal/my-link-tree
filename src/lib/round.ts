export function round(num: number, decimals: number) {
  if (decimals === 0) {
    return Math.round(num)
  }

  return Math.round(num * 10 ** decimals) / 10 ** decimals
}
