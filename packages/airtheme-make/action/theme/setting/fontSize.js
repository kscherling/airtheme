import {
  ADD_FONT_SIZE,
  UPDATE_FONT_SIZE,
  REMOVE_FONT_SIZE
} from '../../../constant/fontSize'

export const addFontSize = (value, key, ordinal) => ({
  type: ADD_FONT_SIZE,
  key,
  ordinal,
  value
})

export const removeFontSize = original => ({
  type: REMOVE_FONT_SIZE,
  original
})

export const updateFontSize = (original, value, key, ordinal) => ({
  type: UPDATE_FONT_SIZE,
  key,
  ordinal,
  original,
  value
})
