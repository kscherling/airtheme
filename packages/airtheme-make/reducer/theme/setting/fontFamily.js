import { UPDATE_THEME } from '../../../constant/root'
import { attribute } from '@airtheme/airtheme-type'

const fontFamily = (state = attribute.fontFamily(), action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.fontFamily
    default:
      return state
  }
}

export default fontFamily
