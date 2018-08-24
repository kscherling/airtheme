import { ADD_COLOR, UPDATE_COLOR, REMOVE_COLOR } from '../../../constant/color'

export const addColor = (value, key, ordinal) => ({
  type: ADD_COLOR,
  value,
  key,
  ordinal
})

export const updateColor = reference => ({
  type: ADD_COLOR,
  reference
})

export const removeColor = reference => ({
  type: ADD_COLOR,
  reference
})
