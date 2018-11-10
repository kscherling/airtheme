import { combineReducers } from 'redux'
import fontSize from './setting/fontSize'
import fontFamily from './setting/fontFamily'
import fontWeight from './setting/fontWeight'
import color from './setting/color'
import spacing from './setting/spacing'
import { UPDATE_THEME } from '../../constant/root'
import { settingSchema } from '@airtheme/type'

const defaultSchemaname = settingSchema.__schemaname
const __schemaname = (state = defaultSchemaname, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.__schemaname || defaultSchemaname
    default:
      return state
  }
}

const defaultTypename = settingSchema.__typename
const __typename = (state = defaultTypename, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.__typename || defaultTypename
    default:
      return state
  }
}

const setting = combineReducers({
  __schemaname,
  __typename,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  spacing
})

export default setting
