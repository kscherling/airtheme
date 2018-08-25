import { UPDATE_THEME } from '../../../constant/root'
import { attribute } from '@airtheme/airtheme-type'

const fontWeight = (state = attribute.fontWeight(), action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.fontWeight
    default:
      return state
  }
}

export default fontWeight
