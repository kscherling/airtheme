import { combineReducers } from 'redux'
import fontSize from './setting/fontSize'
import fontFamily from './setting/fontFamily'
import fontWeight from './setting/fontWeight'
import color from './setting/color'
import spacing from './setting/spacing'
import { UPDATE_THEME } from '../../constant/root'
import { settingSchema } from '@airtheme/type'

const object = (state = settingSchema.object, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.object || settingSchema.object
    default:
      return state
  }
}

const setting = combineReducers({
  object,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  spacing
})

export default setting
