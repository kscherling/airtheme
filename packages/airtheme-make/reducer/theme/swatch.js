import { UPDATE_THEME } from '../../constant/root'
import { ADD_SWATCH, REMOVE_SWATCH, UPDATE_SWATCH } from '../../constant/swatch'
import { unit } from '@airtheme/airtheme-type'

const eq = (a, b) => a === b
const not = a => b => a !== b

const swatch = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      console.log(action.theme.swatch)
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
