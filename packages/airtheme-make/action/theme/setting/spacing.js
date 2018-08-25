import {
  ADD_SPACING,
  UPDATE_SPACING,
  REMOVE_SPACING
} from '../../../constant/spacing'

export const addSpacing = (value, key, ordinal) => ({
  type: ADD_SPACING,
  key,
  ordinal,
  value
})

export const removeSpacing = original => ({
  type: REMOVE_SPACING,
  original
})

export const updateSpacing = (original, value, key, ordinal) => ({
  type: UPDATE_SPACING,
  key,
  ordinal,
  original,
  value
})
