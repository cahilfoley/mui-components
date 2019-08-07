import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TrackerTooltip from './'
import StatCard from '../StatCard'
import { generateDataset } from '../StatCard/demo'
import gif from './demo.gif'

/** BEGIN DEMO */
const useStyles = makeStyles(theme => ({
  hoverZone: {
    borderRadius: theme.shape.borderRadius,
    border: `2px solid ${theme.palette.text.primary}`,
    margin: `${theme.spacing(4)}px auto`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 300,
  },
}))

// Random trend data for the demo
const dataset = generateDataset(12, { varianceLow: 0, varianceHigh: 50 })

// Can override the default tooltip container by providing your own
const PlainWrapper: React.FC = ({ children }) => (
  <div style={{ minWidth: 300 }}>{children}</div>
)

export const Demo = () => {
  const classes = useStyles({})

  return (
    <>
      <TrackerTooltip content="Say hello to an epic tooltip 🔥🔥">
        <Typography variant="h5" className={classes.hoverZone}>
          Hover me for text
        </Typography>
      </TrackerTooltip>

      <TrackerTooltip
        component={PlainWrapper}
        content={
          <StatCard
            data={dataset}
            title="Tooltip Awesomeness"
            units="%"
            footnote="Can't even"
          />
        }
      >
        <Typography variant="h5" className={classes.hoverZone}>
          Hover me for metrics
        </Typography>
      </TrackerTooltip>

      <TrackerTooltip
        content={
          <video
            autoPlay
            loop
            muted
            src="https://preview.redd.it/tzjkqgjxn6iz.gif?format=mp4&amp;s=f9743ac3205808dcdfab1cf2c4edacfc9e152f6b"
          />
        }
      >
        <Typography variant="h5" className={classes.hoverZone} align="center">
          Hover me for sick dance moves
        </Typography>
      </TrackerTooltip>
    </>
  )
}
/** END DEMO */

export { gif }
