import { combineReducers } from 'redux'
import swatch from './theme/swatch'
import {
  UPDATE_BASE_FONT_SIZE,
  UPDATE_BASE_LINE_HEIGHT,
  UPDATE_BASE_SPACING,
  UPDATE_THEME_ID,
  UPDATE_THEME_NAME
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

// Read Only
// Present only for hydration

const version = (state = '', action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.version || ''
    default:
      return state
  }
}

const type = (state = '', action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.type || ''
    default:
      return state
  }
}

export default combineReducers({
  baseFontSize,
  baseLineHeight,
  baseSpacing,
  id,
  name,
  swatch,
  type,
  version
})
