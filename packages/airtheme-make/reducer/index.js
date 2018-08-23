import { combineReducers } from 'redux'
import { UPDATE_THEME } from '../constant/root'
import theme from './theme'

const allReducers = combineReducers({ theme })

const rootReducer = (state = {}, action) => {
  let _state = state

  switch (action.type) {
    case UPDATE_THEME:
      _state = { ...state, theme: action.theme }
  }

  return allReducers(_state, action)
}

export default rootReducer
