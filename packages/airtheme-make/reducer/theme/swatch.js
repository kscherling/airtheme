import { UPDATE_THEME } from '../../constant/root'
import { ADD_SWATCH, REMOVE_SWATCH } from '../../constant/swatch'
import { unit } from '@airtheme/airtheme-type'

const swatch = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.swatch || {}
    case ADD_SWATCH:
      return {
        ...state,
        content: [...state.content, unit.hexa({ value: action.swatch })]
      }
    case REMOVE_SWATCH:
      return {
        ...state,
        content: state.content.filter(
          swatchObj => swatchObj !== action.swatchObj
        )
      }
    default:
      return state
  }
}

export default swatch
