import { useMemo } from 'react'

export const useDots = (count: number, onDotClick?: (index: number) => void) => {
  const dots = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        clickHandler: () => onDotClick && onDotClick(i),
        style: { left: i * 16 },
      })),
    [count, onDotClick],
  )

  return dots
}
