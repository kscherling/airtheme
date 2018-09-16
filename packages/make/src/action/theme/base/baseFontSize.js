import { UPDATE_BASE_FONT_SIZE } from '../../../constant/baseFontSize'

// HEADS UP: We ignore the first arg so update calls cann interoperate
// with standard unit updates that require the original and the updated.
export const updateBaseFontSize = (_original, updated) => ({
  type: UPDATE_BASE_FONT_SIZE,
  updated
})
