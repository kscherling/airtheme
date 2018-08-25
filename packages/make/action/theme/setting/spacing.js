import {
  ADD_SPACING,
  UPDATE_SPACING,
  REMOVE_SPACING
} from '../../../constant/spacing'

export const addSpacing = (value, reference, ordinal) => ({
  type: ADD_SPACING,
  reference,
  ordinal,
  value
})

export const removeSpacing = original => ({
  type: REMOVE_SPACING,
  original
})

export const updateSpacing = (original, value, reference, ordinal) => ({
  type: UPDATE_SPACING,
  reference,
  ordinal,
  original,
  value
})
