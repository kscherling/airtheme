import { UPDATE_THEME } from '../../constant/root'
import { ADD_SWATCH, REMOVE_SWATCH, UPDATE_SWATCH } from '../../constant/swatch'
import { unit, attribute } from '@airtheme/airtheme-type'
import { eq, not } from '../../lib/helpers'

const swatch = (state = attribute.swatch(), action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.swatch || {}
    case ADD_SWATCH:
      return {
        ...state,
        content: [...state.content, unit[state.unit]({ value: action.swatch })]
      }
    case REMOVE_SWATCH:
      return {
        ...state,
        content: state.content.filter(not(action.swatchObj))
      }
    case UPDATE_SWATCH:
      return {
        ...state,
        content: state.content.map(
          swatch =>
            eq(swatch, action.original)
              ? { ...swatch, value: action.updatedVal }
              : swatch
        )
      }
    default:
      return state
  }
}

export default swatch
