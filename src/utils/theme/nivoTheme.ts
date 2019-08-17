import { Theme } from '@material-ui/core/styles'
import { Theme as NivoTheme } from '@nivo/core'

export default (theme: Theme): NivoTheme => {
  const nivoTheme: any = {
    crosshair: {
      line: { stroke: theme.palette.text.primary },
    },
  }

  return nivoTheme as NivoTheme
}
