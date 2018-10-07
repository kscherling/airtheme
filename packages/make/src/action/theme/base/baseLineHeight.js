import {
  UPDATE_BASE_LINE_HEIGHT,
  UPDATE_BASE_LINE_HEIGHT_VIEW
} from '../../../constant/baseLineHeight'

export const updateBaseLineHeightView = view => ({
  type: UPDATE_BASE_LINE_HEIGHT_VIEW,
  view
})

export const updateBaseLineHeight = (_original, updated) => ({
  type: UPDATE_BASE_LINE_HEIGHT,
  updated
})
