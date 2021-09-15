import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import { Provider } from 'react-redux'
import rootReducer from './redux/store'
import App from './App'

ReactDOM.render(
  <Provider store={rootReducer}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
