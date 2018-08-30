import {
  ADD_FONT_SIZE,
  UPDATE_FONT_SIZE,
  REMOVE_FONT_SIZE
} from '../../../constant/fontSize'

export const addFontSize = (value, name, ordinal) => ({
  type: ADD_FONT_SIZE,
  name,
  ordinal,
  value
})

export const removeFontSize = original => ({
  type: REMOVE_FONT_SIZE,
  original
})

export const updateFontSize = (original, updated) => ({
  type: UPDATE_FONT_SIZE,
  original,
  updated
})
