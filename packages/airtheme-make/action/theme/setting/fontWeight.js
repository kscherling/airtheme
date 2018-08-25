import {
  ADD_FONT_WEIGHT,
  REMOVE_FONT_WEIGHT,
  UPDATE_FONT_WEIGHT
} from '../../../constant/fontWeight'

export const addFontWeight = (value, ordinal) => ({
  type: ADD_FONT_WEIGHT,
  value,
  ordinal
})

export const removeFontWeight = original => ({
  type: REMOVE_FONT_WEIGHT,
  original
})

export const updateFontWeight = (original, value, ordinal) => ({
  type: UPDATE_FONT_WEIGHT,
  original,
  value,
  ordinal
})
