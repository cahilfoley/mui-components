import * as React from 'react'
import cx from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import TrendingDownIcon from '@material-ui/icons/TrendingDown'
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat'
import { Trend } from './types'

const useStyles = makeStyles(
  {
    good: {
      color: '#66bb6a',
    },
    bad: {
      color: '#ef5350',
    },
    flat: {
      color: '#26c6da',
    },
  },
  { name: 'TrendIcon' },
)

type TrendIconProps = {
  className?: string
  trend: Trend
  preferredDirection?: Trend
}

const TrendIcon: React.FC<TrendIconProps> = props => {
  const classes = useStyles()

  switch (props.trend) {
    case Trend.DOWN:
      return (
        <TrendingDownIcon
          className={cx(props.className, {
            [classes.good]: props.preferredDirection === Trend.DOWN,
            [classes.bad]: props.preferredDirection !== Trend.DOWN,
          })}
        />
      )

    case Trend.UP:
      return (
        <TrendingUpIcon
          className={cx(props.className, {
            [classes.good]: props.preferredDirection === Trend.UP,
            [classes.bad]: props.preferredDirection !== Trend.UP,
          })}
        />
      )

    default:
      return <TrendingFlatIcon className={cx(props.className, classes.flat)} />
  }
}

TrendIcon.defaultProps = {
  preferredDirection: Trend.UP,
}

export default TrendIcon
