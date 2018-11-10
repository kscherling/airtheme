import { UPDATE_THEME } from '../../../constant/root'
import {
  ADD_COLOR,
  UPDATE_COLOR,
  REMOVE_COLOR,
  UPDATE_COLOR_VIEW
} from '../../../constant/color'
import { attribute } from '@airtheme/type'
import { addUnit, removeUnit, updateUnit } from '../../../lib/unitReducers'

const defaultColor = attribute.color()

const color = (state = defaultColor, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.color || {}
    case UPDATE_COLOR_VIEW:
      return { ...state, view: action.view }
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
