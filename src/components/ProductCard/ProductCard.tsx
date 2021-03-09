import React from 'react'
import styled from 'styled-components'

import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'

import FavoriteIcon from '@material-ui/icons/Favorite'

import { ProductCardStatItem } from './ProductCardStatItem'

const ProductCardMedia = styled(CardMedia)`
  height: 200px;
  background-color: ${({ theme }) => theme?.palette?.background?.default};
`

const TitleLink = styled(Typography).attrs({ variant: 'h5', color: 'textPrimary' })`
  font-size: 16px;
`

const StatGridContainer = styled(Grid)`
  justify-content: space-between;
  align-items: center;
`

const FavoriteIconButton = styled(IconButton)`
  color: #e53935;
`

const FavoriteIconText = styled(Typography).attrs({ variant: 'subtitle2', color: 'textSecondary' })`
  font-size: 0.875rem;
  font-weight: 500;
`

export interface ProductCardStat {
  value: string
  label: string
}

export interface ProductCardProps {
  title: string
  subtitle?: string
  description?: string
  bannerImage?: string
  bannerTitle?: string
  avatarImage?: string
  avatarTitle?: string
  stats?:
    | [ProductCardStat]
    | [ProductCardStat, ProductCardStat]
    | [ProductCardStat, ProductCardStat, ProductCardStat]
}

export const ProductCard = (props: ProductCardProps) => {
  return (
    <Card>
      <CardActionArea>
        <Box p={3}>
          {props.bannerImage && (
            <ProductCardMedia image={props.bannerImage} title={props.bannerTitle} />
          )}
          <Box display="flex" mt={2} alignItems="center">
            {props.avatarImage && (
              <Avatar src={props.avatarImage} alt={props.avatarTitle} title={props.avatarTitle} />
            )}
            <Box ml={props.avatarImage ? 2 : 0}>
              <TitleLink>{props.title}</TitleLink>
              {props.subtitle && (
                <Typography variant="body2" color="textSecondary">
                  {props.subtitle}
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
        {props.description && (
          <Box px={3} pb={2}>
            <Typography variant="body2" color="textSecondary">
              {props.description}
            </Typography>
          </Box>
        )}
        {props.stats && props.stats.length > 0 && (
          <Box px={3} pb={2}>
            <StatGridContainer container spacing={3}>
              {props.stats.map((stat, i) => (
                <ProductCardStatItem key={i} label={stat.label} value={stat.value} />
              ))}
            </StatGridContainer>
          </Box>
        )}
        <Divider />
        <Box py={2} pr={3} pl={2} display="flex" alignItems="center">
          <FavoriteIconButton size="small">
            <FavoriteIcon />
          </FavoriteIconButton>
          <FavoriteIconText>7</FavoriteIconText>
        </Box>
      </CardActionArea>
    </Card>
  )
}

export default ProductCard
