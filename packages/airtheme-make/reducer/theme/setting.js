import { UPDATE_SETTING } from '../constant/setting'

const setting = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SETTING:
      return { ...state, ...action.globals }
    default:
      return state
  }
}

export default setting
