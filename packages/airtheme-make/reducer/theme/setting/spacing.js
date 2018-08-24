import { UPDATE_THEME } from '../../../constant/theme'

const spacing = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.spacing
    default:
      return state
  }
}

export default spacing
