import {
  UPDATE_THEME_NAME,
  UPDATE_THEME_ID,
  UPDATE_THEME_VERSION,
  UPDATE_THEME_TYPE
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
