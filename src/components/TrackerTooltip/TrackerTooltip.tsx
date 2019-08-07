import React, { cloneElement, useMemo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper, { PaperProps } from '@material-ui/core/Paper'
import { useMousePosition, useBoundingRect } from '../../hooks'
import MouseTracker from './MouseTracker'

type TrackerTooltipProps = {
  children: React.ReactElement
  component?: React.FunctionComponent
  rootProps?: PaperProps
} & ({
  content: React.ReactNode
})

const useStyles = makeStyles(
  theme => ({
    paper: {
      padding: theme.spacing(2),
      zIndex: theme.zIndex.tooltip,
    },
    wrapper: {
      width: 'auto',
    },
  }),
  { name: 'TrackerTooltip' },
)

const TrackerTooltip: React.FC<TrackerTooltipProps> = ({
  children,
  content,
  component: Component = Paper,
  rootProps = {},
  ...props
}) => {
  const classes = useStyles({})
  const [ref, rect] = useBoundingRect()
  const [position] = useMousePosition({ throttle: 10 })

  const hover = useMemo(() => {
    if (!rect) return false
    return (
      position.clientX >= rect.left &&
      position.clientX <= rect.right &&
      position.clientY >= rect.top &&
      position.clientY <= rect.bottom
    )
  }, [position, rect])

  return (
    <>
      {cloneElement(children, { ref, ...props })}

      {hover && (
        <MouseTracker {...position}>
          <Component className={classes.paper} {...rootProps}>
            {content}
          </Component>
        </MouseTracker>
      )}
    </>
  )
}

export default TrackerTooltip
