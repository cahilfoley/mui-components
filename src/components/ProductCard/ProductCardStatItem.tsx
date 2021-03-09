import React from 'react'
import styled from 'styled-components'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const StatValueText = styled(Typography).attrs({ variant: 'h5', color: 'textPrimary' })`
  font-size: 16px;
  font-weight: 500;
`

const StatLabelText = styled(Typography).attrs({ variant: 'body2', color: 'textSecondary' })``

const StatGridItem = styled(Grid)`
  padding: 12px;
`

export interface ProductCardStatItemProps {
  label: string
  value: string
}

export const ProductCardStatItem = (props: ProductCardStatItemProps) => {
  return (
    <StatGridItem item>
      <StatValueText>{props.value}</StatValueText>
      <StatLabelText>{props.label}</StatLabelText>
    </StatGridItem>
  )
}
