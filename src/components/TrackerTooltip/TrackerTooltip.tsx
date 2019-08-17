import React, { cloneElement, useEffect, useContext, useMemo, PropsWithChildren } from 'react'
import Paper, { PaperProps } from '@material-ui/core/Paper'
import { useBoundingRect } from '../../hooks'
import { TrackerContext } from './context'
import { makeStyles } from '@material-ui/core/styles'
import StandaloneTracker from './StandaloneTracker'

type TrackerTooltipProps = {
  children: React.ReactElement
  component?: React.FC
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
  }),
  { name: 'TrackerTooltip' },
)

const TrackerTooltip: React.FC<TrackerTooltipProps> = ({
  children,
  content,
  component: Component = Paper,
  ...props
}) => {
  const classes = useStyles()
  const tracker = useContext(TrackerContext)
  const [ref, rect] = useBoundingRect()

  const tooltipContent = useMemo(() => {
    return <Component className={classes.paper}>{content}</Component>
  }, [classes.paper, content])

  useEffect(() => {
    if (tracker.contextAvailable) {
      return tracker.registerZone({ content: tooltipContent, rect })
    }
  }, [tooltipContent, tracker, rect])

  return (
    <>
      {cloneElement(children, { ref, ...props })}
      {!tracker.contextAvailable && (
        <StandaloneTracker rect={rect}>{tooltipContent}</StandaloneTracker>
      )}
    </>
  )
}

export default TrackerTooltip
