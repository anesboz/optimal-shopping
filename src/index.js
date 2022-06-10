import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <div
      className="center-x"
      style={{ backgroundColor: `#808080ab`, height: `100vh` }}
    >
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
)
