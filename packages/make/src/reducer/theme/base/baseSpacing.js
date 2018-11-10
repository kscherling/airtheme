import { UPDATE_THEME } from '../../../constant/root'
import { UPDATE_BASE_SPACING } from '../../../constant/baseSpacing'
import { attribute } from '@airtheme/type'
import { updateBaseUnit } from '../../../lib/unitReducers'

const defaultFontSize = attribute.baseSpacing()

const baseFontSize = (state = defaultFontSize, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.base.baseSpacing || defaultFontSize
    case UPDATE_BASE_SPACING:
      return updateBaseUnit(state, action)
    default:
      return state
  }
}

export default baseFontSize
