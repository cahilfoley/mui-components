import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import RadioCollapse from './RadioCollapse'
import gif from './demo.gif'

export { gif }

/** BEGIN DEMO */
const options1 = {
  A: 'Option A',
  B: 'Option B',
  C: 'Option C',
}

const options2 = {
  1: 'Option 1',
  2: 'Option 2',
  3: 'Option 3',
}

export const Demo = () => {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')

  return (
    <Box maxWidth={400} p={4}>
      <RadioCollapse
        value={value1}
        onChange={setValue1}
        options={options1}
        label="The First Value"
        showNoSelection
      />
      <RadioCollapse
        value={value2}
        onChange={setValue2}
        options={options2}
        label="The Second Value"
        showNoSelection
      />
    </Box>
  )
}
/** END DEMO */
