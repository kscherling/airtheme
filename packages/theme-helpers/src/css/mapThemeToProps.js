// fn(props = { theme, ...rest })

// Base
export const mapBaseFontSize = ({ theme: { baseFontSize } }) => baseFontSize // prettier-ignore
export const mapBaseLineHeight = ({ theme: { baseLineHeight } }) => baseLineHeight // prettier-ignore
export const mapBaseSpacing = ({ theme: { baseSpacing } }) => baseSpacing // prettier-ignore

// Swatch
export const mapSwatch = ({ theme: { swatch } }) => swatch

// Settings
export const mapColor = ({ theme: { setting: { color } } }) => color // prettier-ignore
export const mapFontFamily = ({ theme: { setting: { fontFamily } } }) => fontFamily // prettier-ignore
export const mapFontSize = ({ theme: { setting: { fontSize } } }) => fontSize // prettier-ignore
export const mapFontWeight = ({ theme: { setting: { fontWeight } } }) => fontWeight // prettier-ignore
export const mapSpacing = ({ theme: { setting: { spacing } } }) => spacing // prettier-ignore
