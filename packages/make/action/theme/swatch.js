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

export const addSwatch = swatch => ({
  type: ADD_SWATCH,
  swatch
})

export const removeSwatch = original => ({
  type: REMOVE_SWATCH,
  original
})

export const updateSwatch = (original, updatedVal) => ({
  type: UPDATE_SWATCH,
  original,
  updatedVal
})
