import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import RadioCollapse from './RadioCollapse'

/** BEGIN DEMO */
const options = {
  foo: 'Foo',
  bar: 'Bar',
  baz: 'Baz',
}

export default () => {
  const [value, setValue] = useState('')

  return (
    <Box maxWidth={250}>
      <pre>Value: {value}</pre>
      <RadioCollapse
        value={value}
        onChange={setValue}
        options={options}
        label="Best Variable"
        showNoSelection
      />
    </Box>
  )
}
/** END DEMO */
