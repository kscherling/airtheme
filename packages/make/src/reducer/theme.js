import { combineReducers } from 'redux'
import swatch from './theme/swatch'
import fontFace from './theme/fontFace'
import setting from './theme/setting'
import { themeSchema } from '@airtheme/type'
import {
  UPDATE_BASE_FONT_SIZE,
  UPDATE_BASE_LINE_HEIGHT,
  UPDATE_BASE_SPACING,
  UPDATE_THEME_ID,
  UPDATE_THEME_NAME,
  UPDATE_THEME_VERSION,
  UPDATE_THEME_TYPE
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

const baseFontSize = (state = '', action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.baseFontSize || ''
    case UPDATE_BASE_FONT_SIZE:
      return action.baseFontSize
    default:
      return state
  }
}

const baseLineHeight = (state = '', action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.baseLineHeight || ''
    case UPDATE_BASE_LINE_HEIGHT:
      return action.baseLineHeight
    default:
      return state
  }
}

const baseSpacing = (state = '', action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.baseSpacing || ''
    case UPDATE_BASE_SPACING:
      return action.baseSpacing
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

const object = (state = themeSchema.object, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.object
    default:
      return state
  }
}

export default combineReducers({
  baseFontSize,
  baseLineHeight,
  baseSpacing,
  fontFace,
  id,
  name,
  setting,
  swatch,
  object,
  version
})
