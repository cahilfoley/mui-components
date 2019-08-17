import React, { PropsWithChildren, useCallback, useState } from 'react'
import clsx from 'clsx'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme } from '@material-ui/core/styles'

import InfoIcon from 'mdi-material-ui/InformationVariant'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles<Theme, { togglable: boolean }>(
  (theme: Theme) => ({
    root: {
      position: 'relative' as any,
      minHeight: 100,
    },
    cardBody: {
      padding: theme.spacing(2),
      width: '100%',
    },
    infoIcon: {
      position: 'absolute' as any,
      top: 20,
      right: 20,
      width: 20,
      height: 20,
      transition: theme.transitions.create('opacity'),
      opacity: 1,
      cursor: ({ togglable }) => (togglable ? 'pointer' : ''),
    },
    infoIconHidden: {
      opacity: 0,
    },
    overlay: {
      position: 'absolute' as any,
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.primary.main,
      clipPath: 'circle(15px at calc(100% - 30px) 30px)',
      transition: theme.transitions.create('clip-path', { duration: 400 }),
    },
    overlayHoverable: {
      '&:hover': {
        clipPath: 'circle(75%)',
        '& svg': {
          opacity: 0,
        },
      },
    },
    overlayExpanded: {
      clipPath: 'circle(75%) !important',
    },
    revealText: {
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
  { name: 'RevealCard' },
)

export type RevealCardProps = PropsWithChildren<{
  info: string | React.ReactNode
  title?: string
  togglable?: boolean
}>

const RevealCard: React.FC<RevealCardProps> = ({ children, info, title, togglable = false }) => {
  const classes = useStyles({ togglable })
  const [open, setOpen] = useState(false)

  const toggleOpen = useCallback(() => setOpen(x => !x), [setOpen])

  const Icon = open ? CloseIcon : InfoIcon

  return (
    <Card className={classes.root}>
      <div
        className={clsx(classes.overlay, {
          [classes.overlayExpanded]: togglable && open,
          [classes.overlayHoverable]: !togglable,
        })}
      >
        <div className={classes.cardBody}>
          {typeof info === 'string' ? (
            <Typography className={classes.revealText}>{info}</Typography>
          ) : (
            info
          )}
          {togglable ? (
            <Icon className={classes.infoIcon} onClick={toggleOpen} />
          ) : (
            <InfoIcon className={classes.infoIcon} />
          )}
        </div>
      </div>
      {title && <CardHeader title={title} />}
      <div className={classes.cardBody}>{children}</div>
    </Card>
  )
}

export default RevealCard
