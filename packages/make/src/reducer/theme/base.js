import { combineReducers } from 'redux'
import baseFontSize from './base/baseFontSize'
import baseLineHeight from './base/baseLineHeight'
import baseSpacing from './base/baseSpacing'
import { UPDATE_THEME } from '../../constant/root'
import { baseSchema } from '@airtheme/type'

const __schemaname = (state = baseSchema.__schemaname, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.base.__schemaname || baseSchema.__schemaname
    default:
      return state
  }
}

const __typename = (state = baseSchema.__typename, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.base.__typename || baseSchema.__typename
    default:
      return state
  }
}

const base = combineReducers({
  __schemaname,
  __typename,
  baseFontSize,
  baseLineHeight,
  baseSpacing
})

export default base
