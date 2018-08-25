import { UPDATE_THEME } from '../../../constant/root'
import {
  ADD_FONT_SIZE,
  REMOVE_FONT_SIZE,
  UPDATE_FONT_SIZE
} from '../../../constant/fontSize'
import { attribute } from '@airtheme/airtheme-type'
import { addUnit, removeUnit, updateUnit } from '../../../lib/unitReducers'

const fontSize = (state = attribute.fontSize(), action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.fontSize
    case ADD_FONT_SIZE:
      return addUnit(state, action)
    case REMOVE_FONT_SIZE:
      return removeUnit(state, action)
    case UPDATE_FONT_SIZE:
      return updateUnit(state, action)
    default:
      return state
  }
}

export default fontSize
