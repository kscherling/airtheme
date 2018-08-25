import {
  ADD_FONT_WEIGHT,
  REMOVE_FONT_WEIGHT,
  UPDATE_FONT_WEIGHT
} from '../../../constant/fontWeight'

export const addFontWeight = (value, key, ordinal) => ({
  type: ADD_FONT_WEIGHT,
  key,
  ordinal,
  value
})

export const removeFontWeight = original => ({
  type: REMOVE_FONT_WEIGHT,
  original
})

export const updateFontWeight = (original, value, key, ordinal) => ({
  type: UPDATE_FONT_WEIGHT,
  key,
  ordinal,
  original,
  value
})
