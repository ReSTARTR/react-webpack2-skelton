// import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'

export default function App(props) {
  const store = configureStore()

  return (
    <Provider store={store}>
      <div>Hello, React App</div>
    </Provider>
  )
}
