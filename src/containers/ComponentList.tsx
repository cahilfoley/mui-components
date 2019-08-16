import React, { Fragment } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

import routes from '../routes'

const ComponentList = () => {
  return (
    <div>
      {routes.map((route, i) => (
        <Fragment key={route.path}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              alignItems="center"
              justify="center"
              style={{ display: 'flex' }}
            >
              <img
                src={route.gif}
                alt={route.title}
                style={{ maxHeight: 150, maxWidth: '100%' }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={8}
              justify="center"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <Typography variant="h5">
                <Link component={RouterLink} to={route.path}>
                  {route.title}
                </Link>
              </Typography>
              <Typography paragraph>{route.description}</Typography>
              {route.benchmark && (
                <Typography>
                  <Link component={RouterLink} to={`${route.path}/benchmark`}>
                    Benchmark
                  </Link>
                </Typography>
              )}
            </Grid>
          </Grid>
          <Box py={2}>
            <Divider variant="middle" />
          </Box>
        </Fragment>
      ))}
    </div>
  )
}

export default ComponentList
