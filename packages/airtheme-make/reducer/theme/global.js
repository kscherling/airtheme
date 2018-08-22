import {
  UPDATE_GLOBAL,
  UPDATE_BASE_FONT_SIZE,
  UPDATE_BASE_LINE_HEIGHT,
  UPDATE_BASE_SPACING,
  ADD_SWATCH,
  REMOVE_SWATCH,
  UPDATE_SWATCH
} from '../../constant/global'

const global = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_GLOBAL:
      return { ...state, ...action.globals }
    case UPDATE_BASE_FONT_SIZE:
      return { ...state, baseFontSize: action.baseFontSize }
    case UPDATE_BASE_LINE_HEIGHT:
      return { ...state, baseLineHeight: action.baseLineHeight }
    case UPDATE_BASE_SPACING:
      return { ...state, baseSpacing: action.baseSpacing }
    case ADD_SWATCH:
      return { ...state, swatch: [...state.swatch, action.swatch] }
    case REMOVE_SWATCH:
      return
    case UPDATE_SWATCH:
      return
    default:
      return state
  }
}

export default global
