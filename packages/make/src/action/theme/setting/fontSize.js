import {
  ADD_FONT_SIZE,
  UPDATE_FONT_SIZE,
  REMOVE_FONT_SIZE,
  UPDATE_FONT_SIZE_VIEW
} from '../../../constant/fontSize'

export const updateFontSizeView = view => ({
  type: UPDATE_FONT_SIZE_VIEW,
  view
})

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
