import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

const Wrapper = styled.div`
  padding: 32px;
`

interface ErrorBoundaryState {
  error: Error | null
}

export class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null }

  componentDidCatch(error: Error) {
    this.setState({ error })
  }

  render() {
    if (this.state.error) {
      return (
        <Wrapper>
          <Typography variant="h5">Error</Typography>
          <Typography>{this.state.error.message}</Typography>
        </Wrapper>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
