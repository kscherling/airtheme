import { UPDATE_THEME } from '../../../constant/root'
import {
  ADD_FONT_SIZE,
  REMOVE_FONT_SIZE,
  UPDATE_FONT_SIZE
} from '../../../constant/fontSize'

const fontSize = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.fontSize
    case ADD_FONT_SIZE:
      return state
    case REMOVE_FONT_SIZE:
      return state
    case UPDATE_FONT_SIZE:
      return state
    default:
      return state
  }
}

export default fontSize
