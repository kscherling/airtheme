import { UPDATE_THEME } from '../../../constant/root'
import { ADD_COLOR, UPDATE_COLOR, REMOVE_COLOR } from '../../../constant/color'
import { attribute, unit } from '@airtheme/airtheme-type'

import { eq, not } from '../../../lib/helpers'

const color = (state = attribute.color(), action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.color || {}
    case ADD_COLOR:
      return {
        ...state,
        content: [
          ...state.content,
          unit[state.unit]({
            key: action.key,
            value: action.value,
            ordinal: action.ordinal
          })
        ]
      }
    case REMOVE_COLOR:
      return {
        ...state,
        content: [state.content.filter(not(action.colorObj))]
      }
    case UPDATE_COLOR:
      return {
        ...state,
        content: state.content.map(
          color =>
            eq(color, action.original)
              ? {
                  ...color,
                  value: action.value,
                  key: action.key,
                  ordinal: action.ordinal
                }
              : color
        )
      }
    default:
      return state
  }
}

export default color
