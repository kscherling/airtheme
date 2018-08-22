import { createStore, compose } from 'redux'
import airthemeRootReducer from './reducers'

const enhancers = []
const middleware = []

if (process.env.NODE_ENV === 'development') {
  const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__

  if (devTools) {
    enhancers.push(reduxDevTools())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export default (initialState = {}) =>
  createStore(airthemeRootReducer, initialState, composedEnhancers)
