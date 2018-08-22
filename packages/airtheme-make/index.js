import { createStore } from 'redux'
import reducers from 'reducers'

const store = state => createStore(reducers, state)
