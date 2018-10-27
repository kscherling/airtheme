import { UPDATE_THEME } from '../../../constant/root'
import { UPDATE_BASE_FONT_SIZE } from '../../../constant/baseFontSize'
import { attribute } from '@airtheme/type'
import { updateBaseUnit } from '../../../lib/unitReducers'

const defaultBaseFontSize = attribute.baseFontSize()

const baseFontSize = (state = defaultBaseFontSize, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.base.baseFontSize || defaultBaseFontSize
    case UPDATE_BASE_FONT_SIZE:
      return updateBaseUnit(state, action)
    default:
      return state
  }
}

export default baseFontSize
