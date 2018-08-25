import {
  UPDATE_THEME_NAME,
  UPDATE_THEME_ID,
  UPDATE_BASE_FONT_SIZE,
  UPDATE_BASE_LINE_HEIGHT,
  UPDATE_BASE_SPACING
} from '../constant/theme'

export const updateThemeName = name => ({
  type: UPDATE_THEME_NAME,
  name
})

export const updateThemeId = id => ({
  type: UPDATE_THEME_ID,
  id
})

export const updateBaseFontSize = baseFontSize => ({
  type: UPDATE_BASE_FONT_SIZE,
  baseFontSize
})

export const updateBaseLineHeight = baseLineHeight => ({
  type: UPDATE_BASE_LINE_HEIGHT,
  baseLineHeight
})

export const updateBaseSpacing = baseSpacing => ({
  type: UPDATE_BASE_SPACING,
  baseSpacing
})
