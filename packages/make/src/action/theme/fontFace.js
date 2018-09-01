import {
  ADD_FONT_FACE,
  UPDATE_FONT_FACE,
  REMOVE_FONT_FACE
} from '../../constant/fontFace'

export const addFontFace = (value, name, ordinal) => ({
  type: ADD_FONT_FACE,
  name,
  ordinal,
  value
})

export const removeFontFace = original => ({
  type: REMOVE_FONT_FACE,
  original
})

export const updateFontFace = (original, updated) => ({
  type: UPDATE_FONT_FACE,
  original,
  updated
})
