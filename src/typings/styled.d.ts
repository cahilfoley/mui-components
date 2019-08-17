/**
 * From the styled-components documentation.
 *
 * @see https://www.styled-components.com/docs/api#typescript
 */
import 'styled-components'
import { Theme } from '@material-ui/core/styles'

declare module 'styled-components' {
  export interface DefaultTheme {
    shape: Theme['shape']
    breakpoints: Theme['breakpoints']
    direction: Theme['direction']
    mixins: Theme['mixins']
    overrides?: Theme['overrides']
    palette: Theme['palette']
    props?: Theme['props']
    shadows: Theme['shadows']
    spacing: Theme['spacing']
    transitions: Theme['transitions']
    typography: Theme['typography']
    zIndex: Theme['zIndex']
  }
}
