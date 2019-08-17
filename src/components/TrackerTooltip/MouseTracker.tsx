import React, { useRef, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(
  {
    wrapper: {
      position: 'fixed',
      width: 'auto',
      top: 0,
      left: 0,
      willChange: 'transform',
    },
  },
  { name: 'MouseTracker' },
)

interface MouseTrackerProps {
  clientX: number
  clientY: number
}

const createTransform = ({ clientX, clientY }: MouseTrackerProps) =>
  `translateX(${clientX + 10}px) translateY(${clientY + 10}px)`

const MouseTracker: React.FC<MouseTrackerProps> = ({ children, clientX, clientY }) => {
  const classes = useStyles({})
  const wrapperRef = useRef<HTMLDivElement>() as React.RefObject<HTMLDivElement>
  const positionRef = useRef({ clientX, clientY })

  useEffect(() => {
    positionRef.current = { clientX, clientY }
  }, [clientX, clientY])

  useEffect(() => {
    let nextFrame: number

    const updatePosition = () => {
      if (wrapperRef.current) {
        wrapperRef.current.style.transform = createTransform(positionRef.current)
      }
      nextFrame = requestAnimationFrame(updatePosition)
    }

    updatePosition()

    return () => cancelAnimationFrame(nextFrame)
  }, [wrapperRef])

  return (
    <div ref={wrapperRef} className={classes.wrapper}>
      {children}
    </div>
  )
}

export default MouseTracker
