import { UPDATE_THEME } from '../../../constant/theme'

const fontWeight = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.fontWeight
    default:
      return state
  }
}

export default fontWeight
