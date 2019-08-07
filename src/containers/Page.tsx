import * as React from 'react'
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ArrowBack from '@material-ui/icons/ArrowBack'

type PageProps = {
  title: string
  noBack?: boolean
}

const Page: React.FC<PageProps> = ({ children, noBack, title }) => (
  <div>
    <Box display="flex" mb={4}>
      {!noBack && (
        <Box my="auto">
          <IconButton component={Link} to="../">
            <ArrowBack />
          </IconButton>
        </Box>
      )}
      <Typography variant="h2">{title}</Typography>
    </Box>
    {children}
  </div>
)

export default Page
