import React, { createContext, useState, useRef, useEffect } from 'react'
import { useMousePosition } from '../../hooks'
import MouseTracker from './MouseTracker'

export type Zone = {
  rect: ClientRect | DOMRect
  content: React.ReactNode
}

export type GlobalTooltipValue = {
  registerZone(zone: Zone): () => void
}

export const trackerContext = createContext<GlobalTooltipValue>({
  registerZone(zone: Zone) {
    return () => {}
  },
} as any)

const { Provider } = trackerContext

export const TrackerProvider: React.FC = ({ children }) => {
  const zones = useRef<Zone[]>([])

  const registerZone = (zone: Zone) => {
    console.log('Registering zone', zones.current)
    zones.current.push(zone)
    return () => {
      zones.current = zones.current.filter(x => x !== zone)
    }
  }

  const [position] = useMousePosition({ throttle: 10 })
  const [currentZone, setCurrentZone] = useState<Zone | undefined>()

  useEffect(() => {
    const match = zones.current.find(
      ({ rect }) =>
        rect &&
        position.clientX >= rect.left &&
        position.clientX <= rect.right &&
        position.clientY >= rect.top &&
        position.clientY <= rect.bottom,
    )
    setCurrentZone(match)
  }, [position.clientX, position.clientY, setCurrentZone])

  return (
    <Provider value={{ registerZone }}>
      {children}
      {currentZone && (
        <MouseTracker clientX={position.clientX} clientY={position.clientY}>
          {currentZone.content}
        </MouseTracker>
      )}
    </Provider>
  )
}
