import { UPDATE_THEME } from '../../../constant/root'
import {
  ADD_FONT_FAMILY,
  REMOVE_FONT_FAMILY,
  UPDATE_FONT_FAMILY
} from '../../../constant/fontFamily'
import { attribute } from '@airtheme/airtheme-type'
import { addUnit, removeUnit, updateUnit } from '../../../lib/unitReducers'

const fontFamily = (state = attribute.fontFamily(), action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.fontFamily
    case ADD_FONT_FAMILY:
      return addUnit(state, action)
    case REMOVE_FONT_FAMILY:
      return removeUnit(state, action)
    case UPDATE_FONT_FAMILY:
      return updateUnit(state, action)
    default:
      return state
  }
}

export default fontFamily
