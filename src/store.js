import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { initalState } from 'reducers/mainReducer'

const middleware = [thunk]
var store = createStore(
  rootReducer,
  initalState,
  compose(applyMiddleware(...middleware))
)

// REDUX_DEVTOOLS to activate only in developement
if (process.env.NODE_ENV === `development`) {
  console.log(`NODE_ENV === development, REDUX_DEVTOOLS is activated ✔️`)
  store = createStore(
    rootReducer,
    initalState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
}

export default store
