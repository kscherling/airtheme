import {
  ADD_FONT_FAMILY,
  UPDATE_FONT_FAMILY,
  REMOVE_FONT_FAMILY
} from '../../../constant/fontFamily'

export const addFontFamily = (value, key, ordinal) => ({
  type: ADD_FONT_FAMILY,
  key,
  ordinal,
  value
})

export const removeFontFamily = original => ({
  type: REMOVE_FONT_FAMILY,
  original
})

export const updateFontFamily = (original, value, key, ordinal) => ({
  type: UPDATE_FONT_FAMILY,
  key,
  ordinal,
  original,
  value
})
