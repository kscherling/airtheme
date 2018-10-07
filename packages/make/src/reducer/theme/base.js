import { combineReducers } from 'redux'
import baseFontSize from './base/baseFontSize'
import baseLineHeight from './base/baseLineHeight'
import baseSpacing from './base/baseSpacing'
import { UPDATE_THEME } from '../../constant/root'
import { baseSchema } from '@airtheme/type'

const object = (state = baseSchema.object, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.base.object || baseSchema.object
    default:
      return state
  }
}

const setting = combineReducers({
  baseFontSize,
  baseLineHeight,
  baseSpacing,
  object
})

export default setting
