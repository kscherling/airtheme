import { UPDATE_THEME } from '../../../constant/root'
import {
  ADD_FONT_SIZE,
  REMOVE_FONT_SIZE,
  UPDATE_FONT_SIZE,
  UPDATE_FONT_SIZE_VIEW
} from '../../../constant/fontSize'
import { attribute } from '@airtheme/type'
import { addUnit, removeUnit, updateUnit } from '../../../lib/unitReducers'

const fontSize = (state = attribute.fontSize(), action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.fontSize
    case UPDATE_FONT_SIZE_VIEW:
      return { ...state, view: action.view }
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
