import { UPDATE_THEME } from '../constant/theme'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return { ...action.theme }
    default:
      return state
  }
}
