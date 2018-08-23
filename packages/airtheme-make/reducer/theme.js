import { combineReducers } from 'redux'
import global from './theme/global'
import { UPDATE_THEME_NAME, UPDATE_THEME_ID } from '../constant/theme'

const name = (state = '', action = {}) => {
  switch (action.type) {
    case UPDATE_THEME_NAME:
      return action.name
    default:
      return state
  }
}

const id = (state = '', action = {}) => {
  switch (action.type) {
    case UPDATE_THEME_ID:
      return action.id
    default:
      return state
  }
}

export default combineReducers({ name, id /* setting */ })
