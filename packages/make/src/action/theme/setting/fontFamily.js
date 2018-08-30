import {
  ADD_FONT_FAMILY,
  UPDATE_FONT_FAMILY,
  REMOVE_FONT_FAMILY
} from '../../../constant/fontFamily'

export const addFontFamily = (value, name, ordinal) => ({
  type: ADD_FONT_FAMILY,
  name,
  ordinal,
  value
})

export const removeFontFamily = original => ({
  type: REMOVE_FONT_FAMILY,
  original
})

export const updateFontFamily = (original, updated) => ({
  type: UPDATE_FONT_FAMILY,
  original,
  updated
})
