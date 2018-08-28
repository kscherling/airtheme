import {
  ADD_FONT_FAMILY,
  UPDATE_FONT_FAMILY,
  REMOVE_FONT_FAMILY
} from '../../../constant/fontFamily'

export const addFontFamily = (value, reference, ordinal) => ({
  type: ADD_FONT_FAMILY,
  reference,
  ordinal,
  value
})

export const removeFontFamily = original => ({
  type: REMOVE_FONT_FAMILY,
  original
})

export const updateFontFamily = (original, value, reference, ordinal) => ({
  type: UPDATE_FONT_FAMILY,
  reference,
  ordinal,
  original,
  value
})
