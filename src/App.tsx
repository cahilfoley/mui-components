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
    {routes.map(({ component: Component, title, path }) => (
      //  code
      <Route
        path={path}
        key={path}
        render={() => (
          <Page title={title}>
            <Component />
            {/* <Code>{code}</Code> */}
          </Page>
        )}
      />
    ))}
  </Switch>
)

export default App
