/// <reference types="./typings/assets" />
/// <reference types="./typings/styled" />

import * as React from 'react'
import { render } from 'react-dom'
import App from './App'
import Wrapper from './containers/Wrapper'

const rootElement = document.getElementById('root')
render(
  <Wrapper>
    <App />
  </Wrapper>,
  rootElement,
)
