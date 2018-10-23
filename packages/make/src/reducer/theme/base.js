import { combineReducers } from 'redux'
import baseFontSize from './base/baseFontSize'
import baseLineHeight from './base/baseLineHeight'
import baseSpacing from './base/baseSpacing'
import { UPDATE_THEME } from '../../constant/root'
import { baseSchema } from '@airtheme/type'

const __typename = (state = baseSchema.__typename, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.base.__typename || baseSchema.__typename
    default:
      return state
  }
}

const setting = combineReducers({
  baseFontSize,
  baseLineHeight,
  baseSpacing,
  __typename
})

export default setting
