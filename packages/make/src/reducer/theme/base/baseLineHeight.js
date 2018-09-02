import { UPDATE_THEME } from '../../../constant/root'
import { UPDATE_BASE_LINE_HEIGHT } from '../../../constant/baseLineHeight'
import { attribute } from '@airtheme/type'
import { updateBaseUnit } from '../../../lib/unitReducers'

const baseFontSize = (state = attribute.baseLineHeight(), action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.base.baseLineHeight
    case UPDATE_BASE_LINE_HEIGHT:
      return updateBaseUnit(state, action)
    default:
      return state
  }
}

export default baseFontSize
