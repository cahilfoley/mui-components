import { useCallback, useLayoutEffect, useState, useRef } from 'react'

/**
 * Returns the bounding client rect of a HTML element, uses the `ResizeObserver` api if available to detect changes to the
 * size. Falls back to listening for resize events on the window.
 */
export function useBoundingRect<T extends HTMLElement>(): [React.Ref<T>, ClientRect | DOMRect] {
  const ref = useRef<T>() as React.RefObject<T>
  const [rect, setRect] = useState()

  const recalculator = useCallback(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect())
    }
  }, [ref])

  // Handle changing of size
  useLayoutEffect(() => {
    const { ResizeObserver } = window

    if (!ref.current) return
    recalculator()

    window.addEventListener('resize', recalculator)

    let resizeObserver: ResizeObserver
    if (typeof ResizeObserver === 'function') {
      resizeObserver = new ResizeObserver(recalculator)
      resizeObserver.observe(ref.current)
    }

    return () => {
      window.removeEventListener('resize', recalculator)
      if (resizeObserver) resizeObserver.disconnect()
    }
  }, [ref, recalculator])

  // Handle document scroll
  useLayoutEffect(() => {
    document.addEventListener('scroll', recalculator)
    return () => document.removeEventListener('scroll', recalculator)
  })

  return [ref, rect]
}
