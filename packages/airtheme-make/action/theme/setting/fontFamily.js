import {
  ADD_FONT_FAMILY,
  UPDATE_FONT_FAMILY,
  REMOVE_FONT_FAMILY
} from '../../../constant/fontFamily'

export const addFontFamily = (value, ordinal) => ({
  type: ADD_FONT_FAMILY,
  ordinal,
  value
})

export const removeFontFamily = original => ({
  type: REMOVE_FONT_FAMILY,
  original
})

export const updateFontFamily = (original, value, ordinal) => ({
  type: UPDATE_FONT_FAMILY,
  ordinal,
  original,
  value
})
