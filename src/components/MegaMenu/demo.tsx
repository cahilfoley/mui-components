import * as React from 'react'
import MegaMenu from './'

/** BEGIN DEMO */
const groups = Array.from({ length: 6 }).map((_, num) => ({
  label: `Group ${num}`,
  items: ['A', 'B', 'C'].map(letter => {
    const label = `Item ${num}${letter}`
    return {
      label,
      onClick: () => alert(`${label} clicked`),
    }
  }),
}))

export default () => <MegaMenu items={groups} label="Mega Super Menu" />
/** END DEMO */
