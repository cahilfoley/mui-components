import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import { LineSerieData } from '@nivo/line'
import StatCard from './'
import gif from './demo.gif'

export { gif }

/** BEGIN DEMO */
/** Generate a random integer between a min and a max value */
export const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min)

/** Generates a random distribution of points */
export const generateDataset = (
  size: number,
  { startValue = 50, weekStart = 15, varianceLow = 30, varianceHigh = 30 } = {},
): LineSerieData['data'] => {
  const dataset: LineSerieData['data'] = []

  let previous = startValue
  for (let i = 0; i < size; i++) {
    const y = randomInt(previous - varianceLow, previous + varianceHigh)
    dataset.push({ x: `Week ${i + weekStart}`, y })
    previous = y
  }

  return dataset
}

export const Demo = () => {
  const [metrics] = React.useState([1, 2, 3, 4].map(() => generateDataset(12)))

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <StatCard
            data={metrics[0]}
            title="Hampster Efficiency"
            units="pt"
            footnote="Last week"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <StatCard
            data={metrics[1]}
            title="Potato Utilisation"
            units="%"
            footnote="YTD"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <StatCard
            data={metrics[2]}
            title="Toaster Output"
            units="kw"
            footnote="MTD"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <StatCard
            data={metrics[3]}
            title="Donkey Turnover"
            units="%"
            footnote="Today"
          />
        </Grid>
      </Grid>
    </>
  )
}
/** END DEMO */
