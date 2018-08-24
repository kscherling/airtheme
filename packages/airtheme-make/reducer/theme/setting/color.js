import { UPDATE_THEME } from '../../../constant/theme'
import { ADD_COLOR, UPDATE_COLOR, REMOVE_COLOR } from '../../../constant/color'
import { attribute, unit } from '@airtheme/airtheme-type'

const color = (state = attribute.color(), action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return { ...action.theme.setting.color }
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
    default:
      return state
  }
}

export default color
