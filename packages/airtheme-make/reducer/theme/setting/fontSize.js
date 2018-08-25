import { UPDATE_THEME } from '../../../constant/root'
import {
  ADD_FONT_SIZE,
  REMOVE_FONT_SIZE,
  UPDATE_FONT_SIZE
} from '../../../constant/fontSize'
import { unit, attribute } from '@airtheme/airtheme-type'
import { eq, not } from '../../../lib/helpers'

const addUnit = (state, { key, value, ordinal }) => ({
  ...state,
  content: [...state.content, unit[state.unit]({ key, ordinal, value })]
})

const removeUnit = (state, { original }) => ({
  ...state,
  content: state.content.filter(not(original))
})

const fontSize = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.fontSize
    case ADD_FONT_SIZE:
      return addUnit(state, action)
    case REMOVE_FONT_SIZE:
      return removeUnit(state, action)
    case UPDATE_FONT_SIZE:
      return state
    default:
      return state
  }
}

export default fontSize
