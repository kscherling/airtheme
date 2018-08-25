import { UPDATE_THEME } from '../../../constant/root'
import { ADD_COLOR, UPDATE_COLOR, REMOVE_COLOR } from '../../../constant/color'
import { addUnit, removeUnit, updateUnit } from '../../../lib/unitReducers'

const color = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.color || {}
    case ADD_COLOR:
      return addUnit(state, action)
    case REMOVE_COLOR:
      return removeUnit(state, action)
    case UPDATE_COLOR:
      return updateUnit(state, action)
    default:
      return state
  }
}

export default color
