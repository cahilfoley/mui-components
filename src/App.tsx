import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import ComponentList from './containers/ComponentList'
import Page from './containers/Page'
import routes from './routes'
// import Code from './components/Code'

const Home: React.FC = () => (
  <Page title="Material UI Component Ideas" noBack>
    <ComponentList />
  </Page>
)

const App = () => (
  <Switch>
    <Route component={Home} path="/" exact />
    {routes.flatMap(
      ({ component: Component, benchmark: Benchmark, exact, title, path }) => {
        const output = [
          <Route
            key={path}
            path={path}
            exact={!!Benchmark || exact}
            render={() => (
              <Page title={title}>
                <Component />
                {/* <Code>{code}</Code> */}
              </Page>
            )}
          />,
        ]

        if (Benchmark) {
          output.push(
            <Route
              path={`${path}/benchmark`}
              key={`${path}/benchmark`}
              render={() => (
                <Page title={`${title} Benchmark`}>
                  <Benchmark />
                </Page>
              )}
            />,
          )
        }

        return output
      },
    )}
  </Switch>
)

export default App
