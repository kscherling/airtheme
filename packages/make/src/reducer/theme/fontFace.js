import { UPDATE_THEME } from '../../constant/root'
import {
  ADD_FONT_FACE,
  REMOVE_FONT_FACE,
  UPDATE_FONT_FACE
} from '../../constant/fontFace'
import { attribute } from '@airtheme/type'
import { addUnit, removeUnit, updateUnit } from '../../lib/unitReducers'

const defaultFontFace = attribute.fontFace()

const fontFace = (state = defaultFontFace, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.fontFace || defaultFontFace
    case ADD_FONT_FACE:
      return addUnit(state, action)
    case REMOVE_FONT_FACE:
      return removeUnit(state, action)
    case UPDATE_FONT_FACE:
      return updateUnit(state, action)
    default:
      return state
  }
}

export default fontFace
