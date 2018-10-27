import { UPDATE_THEME } from '../../../constant/root'
import {
  UPDATE_BASE_LINE_HEIGHT,
  UPDATE_BASE_LINE_HEIGHT_VIEW
} from '../../../constant/baseLineHeight'
import { attribute } from '@airtheme/type'
import { updateBaseUnit } from '../../../lib/unitReducers'

const defaultBaseLineHeight = attribute.baseLineHeight()

const baseLineHeight = (state = defaultBaseLineHeight, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.base.baseLineHeight || defaultBaseLineHeight
    case UPDATE_BASE_LINE_HEIGHT_VIEW:
      return { ...state, view: action.view }
    case UPDATE_BASE_LINE_HEIGHT:
      return updateBaseUnit(state, action)
    default:
      return state
  }
}

export default baseLineHeight
