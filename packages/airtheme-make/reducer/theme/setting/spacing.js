import { UPDATE_THEME } from '../../../constant/root'
import {
  ADD_SPACING,
  REMOVE_SPACING,
  UPDATE_SPACING
} from '../../../constant/spacing'
import { attribute } from '@airtheme/type'
import { addUnit, removeUnit, updateUnit } from '../../../lib/unitReducers'

const spacing = (state = attribute.spacing(), action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.spacing
    case ADD_SPACING:
      return addUnit(state, action)
    case REMOVE_SPACING:
      return removeUnit(state, action)
    case UPDATE_SPACING:
      return updateUnit(state, action)
    default:
      return state
  }
}

export default spacing
