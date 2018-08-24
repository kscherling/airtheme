import { UPDATE_THEME } from '../../../constant/theme'

const fontSize = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.fontSize
    default:
      return state
  }
}

export default fontSize
