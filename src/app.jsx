// import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'

function Root(props) {
  const store = configureStore()

  return (
    <Provider store={store}>
      <div>Hello, React App</div>
    </Provider>
  )
}

const container = document.getElementById('root')
if (container) {
    render(
        <Root />,
        container
    )
}

