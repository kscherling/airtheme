import { combineReducers } from 'redux'
import swatch from './theme/swatch'
import fontFace from './theme/fontFace'
import setting from './theme/setting'
import base from './theme/base'
import { themeSchema } from '@airtheme/type'
import {
  UPDATE_THEME_ID,
  UPDATE_THEME_NAME,
  UPDATE_THEME_VERSION
} from '../constant/theme'
import { UPDATE_THEME } from '../constant/root'

const name = (state = '', action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.name || ''
    case UPDATE_THEME_NAME:
      return action.name
    default:
      return state
  }
}

const id = (state = '', action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.id || ''
    case UPDATE_THEME_ID:
      return action.id
    default:
      return state
  }
}

const version = (state = themeSchema.version, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.version || ''
    case UPDATE_THEME_VERSION:
      return action.version
    default:
      return state
  }
}

const __typename = (state = themeSchema.__typename, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.__typename || themeSchema.__typename
    default:
      return state
  }
}

export default combineReducers({
  fontFace,
  id,
  name,
  setting,
  base,
  swatch,
  __typename,
  version
})
