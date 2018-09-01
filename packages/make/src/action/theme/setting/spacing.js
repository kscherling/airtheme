import {
  ADD_SPACING,
  UPDATE_SPACING,
  REMOVE_SPACING,
  UPDATE_SPACING_VIEW
} from '../../../constant/spacing'

export const updateSpacingView = view => ({
  type: UPDATE_SPACING_VIEW,
  view
})

export const addSpacing = (value, name, ordinal) => ({
  type: ADD_SPACING,
  name,
  ordinal,
  value
})

export const removeSpacing = original => ({
  type: REMOVE_SPACING,
  original
})

export const updateSpacing = (original, updated) => ({
  type: UPDATE_SPACING,
  original,
  updated
})
