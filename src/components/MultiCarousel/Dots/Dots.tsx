/**
 * This is a rewrite of the component available in the material-ui-dots package.
 * It has been rewritten to use hooks, not use timeouts, and to use animation timings consistent with the @material-ui theme
 *
 * @see https://github.com/TeamWertarbyte/material-ui-dots
 */

import React, { useMemo } from 'react'
import cx from 'classnames'
import Paper from '@material-ui/core/Paper'

import { useDebounce } from '../../../hooks'
import { useDots } from './hooks'
import { useStyles } from './styles'

export interface DotsProps {
  index: number
  count: number
  onDotClick?: (index: number) => void
}

const Dots = ({ count, index, onDotClick }: DotsProps) => {
  const classes = useStyles({ count, onDotClick })

  // Debounce the setting of the previousIndex by a bit, this makes it look like a tail catching up to the head
  const previousIndex = useDebounce(index, 300)

  // Memoizing the click handlers and style calculations, probably overkill
  const dots = useDots(count, onDotClick)

  // Getting the lower and upper boundaries of the bar
  const [lowerBound, upperBound] = useMemo(
    () => [Math.min(previousIndex, index), Math.max(previousIndex, index)],
    [previousIndex, index],
  )

  return (
    <div className={classes.root}>
      <div className={classes.dots}>
        {dots.map((dot, i) => (
          <div
            key={i}
            className={classes.dotOuter}
            style={dot.style}
            onClick={dot.clickHandler}
          >
            <Paper
              elevation={0}
              className={classes.dot}
              style={{ opacity: i >= lowerBound && i <= upperBound ? 0 : 0.5 }}
            />
          </div>
        ))}
        <Paper
          elevation={0}
          className={cx(classes.dot, classes.dotBar)}
          style={{
            left: lowerBound * 16 + 4,
            width: (upperBound - lowerBound) * 16 + 8,
          }}
        />
      </div>
    </div>
  )
}

export default Dots
