import { UPDATE_THEME } from '../../../constant/theme'

const color = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.color
    default:
      return state
  }
}

export default color
