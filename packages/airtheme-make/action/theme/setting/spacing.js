import {
  ADD_SPACING,
  UPDATE_SPACING,
  REMOVE_SPACING
} from '../../../constant/spacing'

export const addSpacing = (value, key, ordinal) => ({
  type: ADD_SPACING,
  value,
  key,
  ordinal
})

export const removeSpacing = original => ({
  type: REMOVE_SPACING,
  original
})

export const updateSpacing = (original, value, key, ordinal) => ({
  type: UPDATE_SPACING,
  original,
  value,
  key,
  ordinal
})
