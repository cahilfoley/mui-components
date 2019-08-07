import { makeStyles, Theme } from '@material-ui/core/styles'

interface UseStyleProps {
  activeItem: number
  itemCount: number
  showCount: number
}

export const useStyles = makeStyles<Theme, UseStyleProps>(
  (theme: Theme) => {
    const { duration, easing } = theme.transitions
    return {
      root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      scrollRoot: {
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        padding: theme.spacing(0, 6),
      },
      scrollInner: {
        width: ({ itemCount, showCount }) =>
          `${(itemCount / showCount || 0) * 100}%`,
        willChange: 'transform',
        transition: `transform ${duration.standard}ms ${easing.easeInOut}`,
      },
      item: {
        display: 'inline-block',
        padding: theme.spacing(1),
        width: ({ itemCount }) => `${100 / itemCount}%`,
      },
      fallbackWrapper: {
        minHeight: 120,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      button: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
      },
      backButton: {
        left: theme.spacing(1),
      },
      forwardButton: {
        right: theme.spacing(1),
      },
    }
  },
  { name: 'MultiCarousel' },
)

export default useStyles
