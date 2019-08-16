import React, { useMemo } from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import TrackerTooltip from './'
import StatCard from '../StatCard'
import { generateDataset } from '../StatCard/demo'
import { TrackerProvider } from './GlobalTrackerContext'

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const HoverText = styled(Typography)`
  border: 1px solid ${({ theme }) => theme.palette.text.primary};
  padding: 32px auto;
  display: grid;
  text-align: center;
  place-items: center;
`

// Can override the default tooltip container by providing your own
const PlainWrapper: React.FC = ({ children }) => (
  <div style={{ minWidth: 300 }}>{children}</div>
)

export const Benchmark = () => {
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
          <HoverText variant="h5">Hover me #{i}</HoverText>
        </TrackerTooltip>,
      )
    }

    return output
  }, [])

  return (
    <TrackerProvider>
      <Root>{items}</Root>
    </TrackerProvider>
  )
}
