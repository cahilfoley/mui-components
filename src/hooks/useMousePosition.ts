import { useRef, useState, useEffect } from 'react'
import { SharedEventListener } from '../utils'

interface UseMousePositionOptions {
  /** Throttle the updates to only occur every x ms */
  throttle?: number
}

const mouseMoveListener = new SharedEventListener('mousemove')

export function useMousePosition(options: UseMousePositionOptions = {}) {
  const [position, setPosition] = useState(() => ({ clientX: 0, clientY: 0 }))
  const lastUpdate = useRef(0)

  useEffect(() => {
    const unsubscribe = mouseMoveListener.subscribe(({ clientX, clientY }: MouseEvent) => {
      const now = Date.now()
      if (options.throttle && now - lastUpdate.current < options.throttle) return
      setPosition({ clientX, clientY })
      lastUpdate.current = now
    })

    return unsubscribe
  }, [options.throttle])

  return [position]
}
