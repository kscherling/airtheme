import { createStore } from 'redux'
import composedMiddleware from './middleware'
import airthemeReducer from '../reducer'

const makeStore = (initialState = {}) =>
  createStore(airthemeReducer, initialState, composedMiddleware)

export default makeStore
