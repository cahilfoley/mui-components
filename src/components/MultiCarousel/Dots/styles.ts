import { makeStyles, Theme } from '@material-ui/core/styles'

interface UseStyleProps {
  count: number
  onDotClick?: (index: number) => void
}

export const useStyles = makeStyles<Theme, UseStyleProps>(
  (theme: Theme) => ({
    root: {
      width: ({ count }) => count * 16,
    },
    dots: {
      position: 'relative',
      padding: theme.spacing(1, 0, 3),
    },
    dotOuter: {
      width: theme.spacing(1),
      height: theme.spacing(1),
      padding: theme.spacing(0.5),
      position: 'absolute',
      cursor: ({ onDotClick }) => (onDotClick ? 'pointer' : 'auto'),
    },
    dot: {
      width: theme.spacing(1),
      height: theme.spacing(1),
      background: '#fff',
      transition: 'all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
      borderRadius: theme.spacing(0.5),
    },
    dotBar: {
      position: 'absolute',
      marginTop: 4,
    },
  }),
  { name: 'Dots' },
)

export default useStyles
