import React from 'react'
import MultiCarousel from './MultiCarousel'
import StatCard from '../StatCard'
import { generateDataset } from '../StatCard/demo'
import Typography from '@material-ui/core/Typography'

/** BEGIN DEMO */
const datasets = [1, 2, 3, 4, 5, 6].map(() => generateDataset(12))
const statCards = datasets.map((data, i) => (
  <StatCard key={i} data={data} title={`Dataset ${i + 1}`} />
))
const singleStatCard = [statCards[0]]

export default () => (
  <>
    <Typography variant="h5" gutterBottom>
      Item Width
    </Typography>
    <Typography paragraph>
      Use the <code>numberToShow</code> property to control the number of items
      that are visible at a time. This should always be less than or equal to
      the number of items in the collection.
    </Typography>
    <Typography>
      The example below has 6 children and the <code>numberToShow</code> is set
      to 2
    </Typography>
    <MultiCarousel numberToShow={2}>{statCards}</MultiCarousel>

    <Typography paragraph>
      If the number of items passed in is less than the number of items then the
      item will still be spaced correctly.
    </Typography>
    <Typography>
      This example has a single item passed to the carousel with the{' '}
      <code>numberToShow</code> set to 3
    </Typography>
    <MultiCarousel numberToShow={3}>{singleStatCard}</MultiCarousel>
    <br />

    <Typography variant="h5" gutterBottom>
      Disable Autoplay
    </Typography>
    <Typography>
      Autoplay is enabled by default, to disable it pass the{' '}
      <code>disableAutoPlay</code> property
    </Typography>
    <MultiCarousel numberToShow={3} disableAutoPlay>
      {statCards}
    </MultiCarousel>
    <br />

    <Typography variant="h5">Autoplay Timing</Typography>
    <Typography>
      You can use the <code>interval</code> property to specify the number of
      milliseconds between each change.
    </Typography>
    <MultiCarousel numberToShow={1} interval={2000}>
      {statCards}
    </MultiCarousel>
  </>
)
/** END DEMO */
