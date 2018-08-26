// makeStore
import makeStore from './store'
export default makeStore

// Action Creators

export { updateTheme } from './action/root'

export {
  updateThemeName,
  updateThemeId,
  updateBaseFontSize,
  updateBaseLineHeight,
  updateBaseSpacing
} from './action/theme'

export { addSwatch, removeSwatch, updateSwatch } from './action/theme/swatch'

export {
  addColor,
  removeColor,
  updateColor
} from './action/theme/setting/color'

export {
  addFontFamily,
  removeFontFamily,
  updateFontFamily
} from './action/theme/setting/fontFamily'

export {
  addFontSize,
  removeFontSize,
  updateFontSize
} from './action/theme/setting/fontSize'

export {
  addFontWeight,
  removeFontWeight,
  updateFontWeight
} from './action/theme/setting/fontWeight'

export {
  addSpacing,
  removeSpacing,
  updateSpacing
} from './action/theme/setting/spacing'
