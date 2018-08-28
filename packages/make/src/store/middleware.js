import { applyMiddleware, compose } from 'redux'

const enhancers = []
const middleware = []

if (process.env.NODE_ENV === 'development') {
  const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__

  if (reduxDevTools) {
    enhancers.push(reduxDevTools())
  }
}

const composedMiddleware = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export default composedMiddleware
