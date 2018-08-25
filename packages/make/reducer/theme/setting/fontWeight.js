import { UPDATE_THEME } from '../../../constant/root'
import {
  ADD_FONT_WEIGHT,
  REMOVE_FONT_WEIGHT,
  UPDATE_FONT_WEIGHT
} from '../../../constant/fontWeight'
import { attribute } from '@airtheme/type'
import { addUnit, removeUnit, updateUnit } from '../../../lib/unitReducers'

const fontWeight = (state = attribute.fontWeight(), action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.fontWeight
    case ADD_FONT_WEIGHT:
      return addUnit(state, action)
    case REMOVE_FONT_WEIGHT:
      return removeUnit(state, action)
    case UPDATE_FONT_WEIGHT:
      return updateUnit(state, action)
    default:
      return state
  }
}

export default fontWeight
