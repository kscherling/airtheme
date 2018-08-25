import { ADD_COLOR, UPDATE_COLOR, REMOVE_COLOR } from '../../../constant/color'

export const addColor = (value, reference, ordinal) => ({
  type: ADD_COLOR,
  reference,
  ordinal,
  value
})

export const removeColor = original => ({
  type: REMOVE_COLOR,
  original
})

export const updateColor = (original, value, reference, ordinal) => ({
  type: UPDATE_COLOR,
  reference,
  ordinal,
  original,
  value
})
