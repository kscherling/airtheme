import { UPDATE_THEME } from '../../constant/root'
import {
  ADD_SWATCH,
  REMOVE_SWATCH,
  UPDATE_SWATCH,
  UPDATE_SWATCH_VIEW
} from '../../constant/swatch'
import { unit, attribute } from '@airtheme/type'
import { eq, not } from '../../lib/helpers'
import { addUnit, removeUnit, updateUnit } from '../../lib/unitReducers'

const swatch = (state = attribute.swatch(), action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.swatch || {}
    case ADD_SWATCH:
      return addUnit(state, action)
    case REMOVE_SWATCH:
      return removeUnit(state, action)
    case UPDATE_SWATCH:
      return updateUnit(state, action)
    case UPDATE_SWATCH_VIEW:
      return { ...state, view: action.view }
    default:
      return state
  }
}

export default swatch
