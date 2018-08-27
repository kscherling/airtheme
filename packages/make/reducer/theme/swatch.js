import { UPDATE_THEME } from '../../constant/root'
import {
  ADD_SWATCH,
  REMOVE_SWATCH,
  UPDATE_SWATCH,
  UPDATE_SWATCH_VIEW
} from '../../constant/swatch'
import { unit, attribute } from '@airtheme/type'
import { eq, not } from '../../lib/helpers'

const swatch = (state = attribute.swatch(), action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.swatch || {}
    case ADD_SWATCH:
      console.log(action)
      return {
        ...state,
        content: [
          ...state.content,
          unit[state.unit]({
            value: action.value,
            name: action.name,
            ordinal: action.ordinal
          })
        ]
      }
    case REMOVE_SWATCH:
      return {
        ...state,
        content: state.content.filter(not(action.original))
      }
    case UPDATE_SWATCH:
      return {
        ...state,
        content: state.content.map(
          swatch => (eq(swatch, action.original) ? action.updated : swatch)
        )
      }
    case UPDATE_SWATCH_VIEW:
      return { ...state, view: action.view }
    default:
      return state
  }
}

export default swatch
