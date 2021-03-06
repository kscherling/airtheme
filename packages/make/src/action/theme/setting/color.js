import { ADD_COLOR, UPDATE_COLOR, REMOVE_COLOR, UPDATE_COLOR_VIEW } from '../../../constant/color'

export const updateColorView = view => ({
  type: UPDATE_COLOR_VIEW,
  view
})

export const addColor = (value, name, ordinal) => ({
  type: ADD_COLOR,
  name,
  ordinal,
  value
})

export const removeColor = (original) => ({
  type: REMOVE_COLOR,
  original
})

export const updateColor = (original, updated) => ({
  type: UPDATE_COLOR,
  original,
  updated
})
