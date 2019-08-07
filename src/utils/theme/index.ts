import { createMuiTheme } from '@material-ui/core/styles'

const common = {
  palette: {
    primary: { main: '#F5A623' },
    secondary: { main: '#4A4A4A' },
  },
}

export const darkTheme = createMuiTheme({
  ...common,
  palette: {
    ...common.palette,
    type: 'dark',
  },
})

export const lightTheme = createMuiTheme({
  ...common,
  palette: {
    ...common.palette,
    type: 'light',
  },
})
