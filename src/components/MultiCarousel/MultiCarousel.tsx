import React, { useMemo, useState, useEffect, useCallback } from 'react'
import cx from 'classnames'

import Fab from '@material-ui/core/Fab'
import ArrowForward from '@material-ui/icons/ArrowForward'
import ArrowBack from '@material-ui/icons/ArrowBack'
import Dots from './Dots'
import { useStyles } from './styles'
import { Typography } from '@material-ui/core'

export interface MultiCarouselProps {
  children: React.ReactNode[]
  disableAutoPlay?: boolean
  interval?: number
  numberToShow: number
  fallbackMessage?: string
}

type SetIndexArg = (prevState: number) => number

const MultiCarousel = ({
  disableAutoPlay,
  children,
  numberToShow,
  interval = 8000,
  fallbackMessage = 'Nothing to display',
}: MultiCarouselProps) => {
  const itemCount = useMemo(() => children.length, [children])

  // The number of items to show can't exceed the number of items available
  const showCount = useMemo(() => Math.min(numberToShow, itemCount), [
    numberToShow,
    itemCount,
  ])
  const maxIndex = useMemo(() => itemCount - showCount + 1, [
    itemCount,
    showCount,
  ])

  const [index, setIndex] = useState(0)
  const [lastClick, setLastClick] = useState(() => Date.now())

  // Move to a specific items
  const moveToIndex = useCallback(
    (setArg: number | SetIndexArg) => {
      setIndex(setArg)
      setLastClick(Date.now())
    },
    [setIndex, setLastClick],
  )

  // Move the carousel to the left and right
  const moveLeft = () => moveToIndex(Math.max(index - 1, 0))
  const moveRight = () => moveToIndex(Math.min(index + 1, maxIndex))

  // Same as moveRight except it loops back to the start
  const moveNext = useCallback(() => moveToIndex(x => (x + 1) % maxIndex), [
    maxIndex,
    moveToIndex,
  ])

  // Auto play timer
  useEffect(() => {
    if (!disableAutoPlay) {
      const timer = setInterval(moveNext, interval)
      return () => clearInterval(timer)
    }
  }, [disableAutoPlay, moveNext, interval, lastClick])

  const classes = useStyles({
    itemCount,
    showCount: numberToShow,
    activeItem: index,
  })

  return (
    <div className={classes.root}>
      <div className={classes.scrollRoot}>
        {itemCount === 0 ? (
          <div className={classes.fallbackWrapper}>
            <Typography>{fallbackMessage}</Typography>
          </div>
        ) : (
          <div
            className={classes.scrollInner}
            style={{
              transform: `translateX(-${(100 / itemCount) * index}%)`,
            }}
          >
            {children.map((child, i) => (
              <div key={i} className={classes.item}>
                {child}
              </div>
            ))}
          </div>
        )}
        <Fab
          size="small"
          onClick={moveLeft}
          disabled={index === 0}
          className={cx(classes.button, classes.backButton)}
        >
          <ArrowBack />
        </Fab>
        <Fab
          size="small"
          onClick={moveRight}
          disabled={index === maxIndex - 1}
          className={cx(classes.button, classes.forwardButton)}
        >
          <ArrowForward />
        </Fab>
      </div>
      {itemCount !== 0 && (
        <Dots index={index} count={maxIndex} onDotClick={moveToIndex} />
      )}
    </div>
  )
}

export default MultiCarousel
