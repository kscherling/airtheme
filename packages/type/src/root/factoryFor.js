import {
  BASE_FONT_SIZE_KEY,
  BASE_LINE_HEIGHT_KEY,
  BASE_SPACING_KEY
} from '@airtheme/core'

// prettier-ignore
export const factoryFor = ({
  baseFontSize,
  baseSpacing,
  baseLineHeight,
} = {}, schema) => ({
  baseFontSize: instanceBaseFontSize,
  baseSpacing: instanceBaseSpacing,
  baseLineHeight: instanceBaseLineHeight,
} = {}) => Object.assign({}, schema, {
  baseFontSize: instanceBaseFontSize || baseFontSize || schema.baseFontSize,
  baseSpacing: instanceBaseSpacing || baseSpacing || schema.baseSpacing,
  baseLineHeight: instanceBaseLineHeight || baseLineHeight || schema.baseLineHeight
})

export default factoryFor
