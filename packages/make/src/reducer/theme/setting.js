import { combineReducers } from 'redux'
import fontSize from './setting/fontSize'
import fontFamily from './setting/fontFamily'
import fontWeight from './setting/fontWeight'
import color from './setting/color'
import spacing from './setting/spacing'
import { UPDATE_THEME } from '../../constant/root'
import { settingSchema } from '@airtheme/type'

const __typename = (state = settingSchema.__typename, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.__typename || settingSchema.__typename
    default:
      return state
  }
}

const setting = combineReducers({
  __typename,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  spacing
})

export default setting
