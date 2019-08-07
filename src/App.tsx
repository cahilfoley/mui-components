import * as React from 'react'
import { Link as RouterLink, Route, Switch } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Page from './containers/Page'
import routes from './routes'
// import Code from './components/Code'

const Home: React.FC = () => (
  <Page title="Home" noBack>
    <ul>
      {routes.map(route => (
        <li key={route.path}>
          <Typography variant="body1">
            <Link component={RouterLink} to={route.path} key={route.path}>
              {route.title}
            </Link>
          </Typography>
        </li>
      ))}
    </ul>
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
