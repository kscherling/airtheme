import { UPDATE_THEME } from '../../../constant/theme'

const fontFamily = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.fontFamily
    default:
      return state
  }
}

export default fontFamily
