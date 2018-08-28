import {
  ADD_FONT_SIZE,
  UPDATE_FONT_SIZE,
  REMOVE_FONT_SIZE
} from '../../../constant/fontSize'

export const addFontSize = (value, reference, ordinal) => ({
  type: ADD_FONT_SIZE,
  reference,
  ordinal,
  value
})

export const removeFontSize = original => ({
  type: REMOVE_FONT_SIZE,
  original
})

export const updateFontSize = (original, value, reference, ordinal) => ({
  type: UPDATE_FONT_SIZE,
  reference,
  ordinal,
  original,
  value
})
