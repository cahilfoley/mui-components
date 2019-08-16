import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import Box from '@material-ui/core/Box'
import CssBaseline from '@material-ui/core/CssBaseline'
import IconButton from '@material-ui/core/IconButton'
import InvertColors from '@material-ui/icons/InvertColors'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { lightTheme, darkTheme } from '../utils/theme'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    overflowX: 'hidden',
    width: '100%',
  },
  title: {
    flexGrow: 1,
  },
})

const Wrapper: React.FC<{}> = ({ children }) => {
  const classes = useStyles({})
  const [dark, setDark] = React.useState(true)

  const toggleTheme = () => setDark(x => !x)

  return (
    <Router>
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <MuiThemeProvider theme={dark ? darkTheme : lightTheme}>
          <CssBaseline />
          <div className={classes.root}>
            <AppBar position="static" color="primary">
              <Toolbar>
                <Typography
                  variant="h6"
                  color="textPrimary"
                  className={classes.title}
                >
                  Component Ideas
                </Typography>

                <IconButton onClick={toggleTheme}>
                  <InvertColors />
                </IconButton>
              </Toolbar>
            </AppBar>
          </div>
          <Box m={4}>{children}</Box>
        </MuiThemeProvider>
      </ThemeProvider>
    </Router>
  )
}

export default Wrapper
