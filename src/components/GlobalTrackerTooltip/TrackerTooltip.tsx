import React, { cloneElement, useEffect, useContext } from 'react'
import Paper, { PaperProps } from '@material-ui/core/Paper'
import { useBoundingRect } from '../../hooks'
import { trackerContext } from './GlobalTrackerContext'
import { makeStyles } from '@material-ui/core/styles'

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
  const { registerZone } = useContext(trackerContext)
  const [ref, rect] = useBoundingRect()

  useEffect(() => {
    const wrappedContent = (
      <Component className={classes.paper}>{content}</Component>
    )
    return registerZone({ content: wrappedContent, rect })
  }, [content, rect])

  return cloneElement(children, { ref, ...props })
}

export default TrackerTooltip
