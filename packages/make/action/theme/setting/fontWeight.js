import {
  ADD_FONT_WEIGHT,
  REMOVE_FONT_WEIGHT,
  UPDATE_FONT_WEIGHT
} from '../../../constant/fontWeight'

export const addFontWeight = (value, reference, ordinal) => ({
  type: ADD_FONT_WEIGHT,
  reference,
  ordinal,
  value
})

export const removeFontWeight = original => ({
  type: REMOVE_FONT_WEIGHT,
  original
})

export const updateFontWeight = (original, value, reference, ordinal) => ({
  type: UPDATE_FONT_WEIGHT,
  reference,
  ordinal,
  original,
  value
})
