import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import makeStyles from '@material-ui/styles/makeStyles'

import { MenuItemGroup } from './types'

export type MegaMenuGroupProps = MenuItemGroup & {
  handleClose: () => void
}

const useStyles = makeStyles({
  root: {
    padding: 8,
    minWidth: 150,
    display: 'inline-flex',
    flexDirection: 'column',
    justifySelf: 'stretch',
  },
})

const MegaMenuGroup = (props: MegaMenuGroupProps) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="caption">{props.label}</Typography>
      {props.items.map((item, i) => (
        <ListItem
          button
          key={i}
          onClick={event => {
            event.preventDefault()
            props.handleClose()
            item.onClick()
          }}
        >
          {item.label}
        </ListItem>
      ))}
    </div>
  )
}

export default MegaMenuGroup
