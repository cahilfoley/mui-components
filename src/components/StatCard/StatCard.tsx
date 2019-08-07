import React, { useCallback, useMemo } from 'react'
import { AutoSizer } from 'react-virtualized'
import { Line, LineSerieData, LineProps } from '@nivo/line'
import { useTheme, makeStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TrendIcon, { Trend } from '../TrendIcon'
import { useRange, useTrend } from './hooks'
import nivoTheme from '../../utils/theme/nivoTheme'

const baseLineProps: Partial<LineProps> = {
  enableArea: true,
  enableGridX: false,
  enableGridY: false,
  margin: {
    left: 4,
    right: 4,
  },
  axisTop: null,
  axisRight: null,
  axisLeft: null,
  axisBottom: null,
  enableSlices: 'x',
  pointSize: 5,
  pointBorderWidth: 2,
  pointBorderColor: { from: 'serieColor' },
}

interface UseStylesProps {
  height: number
}

const useStyles = makeStyles<Theme, UseStylesProps>(
  theme => ({
    paper: props => ({
      display: 'flex',
      flexDirection: 'column',
      height: props.height,
      padding: theme.spacing(2),
    }),
    tooltip: {
      padding: theme.spacing(1),
      whiteSpace: 'nowrap',
    },
    trendIcon: {
      verticalAlign: 'middle',
      marginLeft: theme.spacing(0.5),
    },
  }),
  { name: 'StatCard' },
)

export type StatCardProps = {
  title: string
  data: LineSerieData['data']
  height?: number
  units?: string
  footnote?: string
  preferredDirection?: Trend
}

const StatCard = ({
  data,
  footnote,
  height = 120,
  preferredDirection = Trend.UP,
  title,
  units,
}: StatCardProps) => {
  const theme = useTheme()
  const classes = useStyles({ height })

  const [trend] = useTrend(data)
  const [range, min, max] = useRange(data)

  const lineProps = useMemo<LineProps>(() => {
    return {
      ...baseLineProps,
      pointColor: theme.palette.background.paper,
      yScale: { type: 'linear', min: min - range / 5, max: max + range / 5 },
      data: [{ id: title, color: theme.palette.primary.main, data }],
    }
  }, [range, min, max, data, theme.palette, title])

  const lineTheme = useMemo(() => nivoTheme(theme), [theme])

  const SliceTooltip = useCallback(
    ({ slice }: any) => (
      <Paper className={classes.tooltip}>
        {slice.points.map(point => (
          <div key={point.x}>
            {point.data.x}: {point.data.y}
            {units}
          </div>
        ))}
      </Paper>
    ),
    [classes, units],
  )

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6">
        {title}
        <TrendIcon
          trend={trend}
          preferredDirection={preferredDirection}
          className={classes.trendIcon}
        />
      </Typography>
      <Box display="flex" height="100%">
        <Box
          minWidth={100}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <Typography variant="h5" component="p">
            {data[data.length - 1].y}
            {units}
          </Typography>
          <Typography variant="caption">{footnote}</Typography>
        </Box>
        <Box flex={1}>
          <AutoSizer>
            {({ height, width }) => (
              <Line
                {...lineProps}
                height={height}
                width={width}
                theme={lineTheme}
                animate={false}
                sliceTooltip={SliceTooltip}
              />
            )}
          </AutoSizer>
        </Box>
      </Box>
    </Paper>
  )
}

export default StatCard
