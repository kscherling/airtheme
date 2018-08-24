import { combineReducers } from 'redux'
import fontSize from './setting/fontSize'
import fontFamily from './setting/fontFamily'
import fontWeight from './setting/fontWeight'
import color from './setting/color'
import spacing from './setting/spacing'

const setting = combineReducers({
  color,
  fontFamily,
  fontSize,
  fontWeight,
  spacing
})

export default setting
