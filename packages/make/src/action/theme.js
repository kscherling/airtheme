import {
  UPDATE_THEME_NAME,
  UPDATE_THEME_ID,
  UPDATE_THEME_VERSION,
  UPDATE_THEME_TYPE,
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

export const updateThemeObject = object => ({
  type: UPDATE_THEME_TYPE,
  object
})

export const updateThemeVersion = version => ({
  type: UPDATE_THEME_VERSION,
  version
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
