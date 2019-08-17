import React, { useMemo, PropsWithChildren } from 'react'
import { useMousePosition } from '../../hooks'
import { rectContainsPosition } from './utils'
import MouseTracker from './MouseTracker'

export type StandaloneTrackerProps = PropsWithChildren<{
  rect: DOMRect | ClientRect
}>

export const StandaloneTracker = ({ children, rect }: StandaloneTrackerProps) => {
  const [position] = useMousePosition()
  const isVisible = useMemo(() => {
    return rectContainsPosition(rect, position)
  }, [rect, position])

  if (!isVisible) return null

  return (
    <MouseTracker clientX={position.clientX} clientY={position.clientY}>
      {children}
    </MouseTracker>
  )
}

export default StandaloneTracker
