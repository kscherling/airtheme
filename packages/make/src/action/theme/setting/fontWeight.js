import {
  ADD_FONT_WEIGHT,
  REMOVE_FONT_WEIGHT,
  UPDATE_FONT_WEIGHT
} from '../../../constant/fontWeight'

export const addFontWeight = (value, name, ordinal) => ({
  type: ADD_FONT_WEIGHT,
  name,
  ordinal,
  value
})
export const removeFontWeight = original => ({
  type: REMOVE_FONT_WEIGHT,
  original
})

export const updateFontWeight = (original, updated) => ({
  type: UPDATE_FONT_WEIGHT,
  original,
  updated
})
