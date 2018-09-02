import { UPDATE_THEME } from '../../../constant/root'
import { UPDATE_BASE_FONT_SIZE } from '../../../constant/baseFontSize'
import { attribute } from '@airtheme/type'
import { updateBaseUnit } from '../../../lib/unitReducers'

attribute.baseFontSize()

const baseFontSize = (state = attribute.baseFontSize(), action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.base.baseFontSize
    case UPDATE_BASE_FONT_SIZE:
      console.log(action)
      return updateBaseUnit(state, action)
    default:
      return state
  }
}

export default baseFontSize
