import {
  UPDATE_THEME,
  UPDATE_THEME_NAME,
  UPDATE_THEME_ID,
  UPDATE_BASE_FONT_SIZE,
  UPDATE_BASE_LINE_HEIGHT,
  UPDATE_BASE_SPACING,
  ADD_SWATCH,
  REMOVE_SWATCH,
  UPDATE_SWATCH
} from '../constant/theme'

export const updateTheme = theme => ({
  type: UPDATE_THEME,
  theme
})

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

export const addSwatch = swatch => ({
  type: ADD_SWATCH,
  swatch
})

export const removeSwatch = swatch => ({
  type: ADD_SWATCH,
  swatch
})

export const updateSwatch = swatch => ({
  type: ADD_SWATCH,
  swatch
})
