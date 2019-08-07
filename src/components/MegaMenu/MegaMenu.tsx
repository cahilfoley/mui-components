import React, { useCallback } from 'react'
import Button from '@material-ui/core/Button'
import Popover from '@material-ui/core/Popover'
import makeStyles from '@material-ui/styles/makeStyles'

import { MenuItemGroup } from './types'
import MegaMenuGroup from './MegaMenuGroup'

const { useState } = React

export type MegaMenuProps = {
  label: string
  items: MenuItemGroup[]
}

const useStyles = makeStyles({
  popoverPaper: {
    minWidth: 180,
    width: 'auto',
    maxWidth: 520,
    padding: 16,
    maxHeight: 'calc(100% - 32px)',
  },
})

const MegaMenu = (props: MegaMenuProps) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const handleClick = useCallback(
    (event: React.MouseEvent) => setAnchorEl(event.currentTarget as HTMLElement),
    [],
  )

  const handleClose = useCallback(() => setAnchorEl(null), [])

  return (
    <>
      <Button onClick={handleClick} variant="contained">
        {props.label}
      </Button>
      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        PaperProps={{ className: classes.popoverPaper }}
      >
        {props.items.map(group => (
          <MegaMenuGroup key={group.label} handleClose={handleClose} {...group} />
        ))}
      </Popover>
    </>
  )
}

export default MegaMenu
