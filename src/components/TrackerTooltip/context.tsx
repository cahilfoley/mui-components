import React, { createContext, useState, useRef, useEffect } from 'react'
import { useMousePosition } from '../../hooks'
import MouseTracker from './MouseTracker'
import { rectContainsPosition } from './utils'

export type Zone = {
  rect: ClientRect | DOMRect
  content: React.ReactNode
}

export type GlobalTooltipValue = {
  contextAvailable: boolean
  registerZone: (zone: Zone) => () => void
}

export const TrackerContext = createContext<GlobalTooltipValue>({
  contextAvailable: false,
  registerZone: (zone: Zone) => () => {},
} as any)

export const TrackerProvider: React.FC = ({ children }) => {
  const zones = useRef<Zone[]>([])

  const registerZone = (zone: Zone) => {
    zones.current.push(zone)
    return () => {
      zones.current = zones.current.filter(x => x !== zone)
    }
  }

  const [position] = useMousePosition({ throttle: 10 })
  const [currentZone, setCurrentZone] = useState<Zone | undefined>()

  useEffect(() => {
    const match = zones.current.find(({ rect }) => rectContainsPosition(rect, position))
    setCurrentZone(match)
  }, [position, setCurrentZone])

  return (
    <TrackerContext.Provider value={{ contextAvailable: true, registerZone }}>
      {children}
      {currentZone && (
        <MouseTracker clientX={position.clientX} clientY={position.clientY}>
          {currentZone.content}
        </MouseTracker>
      )}
    </TrackerContext.Provider>
  )
}
