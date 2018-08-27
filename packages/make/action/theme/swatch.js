import {
  UPDATE_SWATCH_VIEW,
  UPDATE_SWATCH,
  ADD_SWATCH,
  REMOVE_SWATCH
} from '../../constant/swatch'

export const updateSwatchView = view => ({
  type: UPDATE_SWATCH_VIEW,
  view
})

export const addSwatch = (name, ordinal, value) => ({
  type: ADD_SWATCH,
  name,
  ordinal,
  value
})

export const removeSwatch = original => ({
  type: REMOVE_SWATCH,
  original
})

export const updateSwatch = (original, updated) => ({
  type: UPDATE_SWATCH,
  original,
  updated
})
