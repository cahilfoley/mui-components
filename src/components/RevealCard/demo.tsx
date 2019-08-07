import React from 'react'
import Typography from '@material-ui/core/Typography'
import InfoIcon from 'mdi-material-ui/InformationVariant'
import RevealCard from './RevealCard'
import gif from './demo.gif'

export { gif }

/** BEGIN DEMO */
export const Demo = () => {
  return (
    <>
      <RevealCard
        title="Hover Mode Demo"
        info="Well done, you hovered it, to go back to the card just move your mouse off the card."
      >
        <Typography paragraph align="justify">
          Using hover mode will show the info overlay whenever the mouse hovers
          over the <InfoIcon style={{ height: 16 }} /> icon in the top right of
          the card.
        </Typography>
      </RevealCard>
      <br />
      <RevealCard
        title="Toggle Mode Demo"
        info="You are in the toggled zone, click the cross to go back."
        togglable
      >
        <Typography paragraph align="justify">
          Using toggle mode will show the info overlay when you click on the{' '}
          <InfoIcon style={{ height: 16 }} />
          in the top right of the card.
        </Typography>
      </RevealCard>
      <br />
      <RevealCard
        title="Custom Info Demo"
        info={
          <div>
            <Typography variant="h5">Super Info</Typography>
            <Typography paragraph>
              You are in the toggled zone, custom content can live here
            </Typography>
          </div>
        }
        togglable
      >
        <Typography paragraph align="justify">
          Using toggle mode will show the info overlay when you click on the{' '}
          <InfoIcon style={{ height: 16 }} />
          in the top right of the card.
        </Typography>
      </RevealCard>
    </>
  )
}
/** END DEMO */
