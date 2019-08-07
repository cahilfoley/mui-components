import { useMemo } from 'react'
import { LineSerieData } from '@nivo/line'
import { Trend } from '../TrendIcon'

/**
 * Calculates the direction that the series is moving in based on the last 2 points.
 * Also returns the amount that the value moved in the last step. Returns an array containing:
 *   - The trend direction
 *   - The movement amount
 */
export const useTrend = (points: LineSerieData['data']): [Trend, number] => {
  const [trend, movement] = useMemo(() => {
    const len = points.length
    if (len < 2) return Trend.FLAT

    const last = points[len - 1].y as number
    const secondLast = points[len - 2].y as number
    const movement = Math.abs(last - secondLast)

    if (last > secondLast) return [Trend.UP, movement]
    if (last < secondLast) return [Trend.DOWN, movement]
    return [Trend.FLAT, 0]
  }, [points])

  return [trend, movement]
}

/**
 * Calculates metadata about a data series, returns an array with 3 values:
 *   - The range (max - min)
 *   - The minimum value
 *   - The maximum value
 */
export const useRange = (points: LineSerieData['data']): [number, number, number] => {
  const [min, max] = useMemo(() => {
    if (!Array.isArray(points) || points.length === 0) return [0, 0]

    const values = points.map(point => point.y as number)
    const min = Math.min(...values)
    const max = Math.max(...values)

    return [min, max]
  }, [points])

  const range = max - min

  return [range, min, max]
}
