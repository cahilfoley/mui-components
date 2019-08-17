import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Typography from '@material-ui/core/Typography'
import Switch from '@material-ui/core/Switch'
import TrackerTooltip, { TrackerProvider } from './'
import Code from '../Code'
import StatCard from '../StatCard'
import { generateDataset } from '../StatCard/demo'

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const HoverText = styled.h5`
  border: 1px solid ${({ theme }) => theme.palette.text.primary};
  padding: 16px;
  margin: 0;
  display: grid;
  text-align: center;
  place-items: center;
`

const trackerProviderSample = `
import {
  TrackerTooltip,
  TrackerProvider,
} from 'components/TrackerTooltip'

<TrackerProvider>
  <div>
    <TrackerTooltip>
      <div>
        <h4>Hover me to see the magic</h4>
        <p>It's even high performance!</p>
      </div>
    </TrackerTooltip>
    <TrackerTooltip>
      {/* Something else */}
    </TrackerTooltip>
    {/* ... a few hundred more */}
  </div>
</TrackerProvider>
`.trim()

// Can override the default tooltip container by providing your own
const PlainWrapper: React.FC = ({ children }) => <div style={{ minWidth: 300 }}>{children}</div>

export const Benchmark = () => {
  const [isUsingContext, setIsUsingContext] = useState(true)

  const DemoWrapper = useMemo(() => {
    if (isUsingContext) return TrackerProvider

    return React.Fragment
  }, [isUsingContext])

  const items = useMemo(() => {
    const output = []

    for (let i = 0; i < 200; i++) {
      output.push(
        <TrackerTooltip
          key={i}
          component={PlainWrapper}
          content={
            <StatCard
              data={generateDataset(12, {
                varianceLow: 0,
                varianceHigh: 50,
              })}
              title="Tooltip Awesomeness"
              units="%"
              footnote={"Can't even " + i}
            />
          }
        >
          <HoverText>Hover me #{i}</HoverText>
        </TrackerTooltip>,
      )
    }

    return output
  }, [])

  return (
    <DemoWrapper>
      <Typography>
        If you are rendering a lot of <code>TrackerTooltip</code> components you can wrap them in a{' '}
        <code>TrackerProvider</code> to improve performance.
      </Typography>
      <Code>{trackerProviderSample}</Code>
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              color="primary"
              checked={isUsingContext}
              onChange={event => setIsUsingContext(event.target.checked)}
            />
          }
          label="Using context provider"
        />
      </FormGroup>
      <Root>{items}</Root>
    </DemoWrapper>
  )
}
