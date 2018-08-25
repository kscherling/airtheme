import { ADD_COLOR, UPDATE_COLOR, REMOVE_COLOR } from '../../../constant/color'

export const addColor = (value, key, ordinal) => ({
  type: ADD_COLOR,
  value,
  key,
  ordinal
})

export const updateColor = (original, value, key, ordinal) => ({
  type: UPDATE_COLOR,
  original,
  value,
  key,
  ordinal
})

export const removeColor = reference => ({
  type: ADD_COLOR,
  reference
})
