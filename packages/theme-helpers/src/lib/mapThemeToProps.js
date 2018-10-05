// Each returns an object where a key can be later looked up

export const mapBaseFontSize = ({ theme }) => theme // prettier-ignore
export const mapBaseLineHeight = ({ theme }) => theme // prettier-ignore
export const mapBaseSpacing = ({ theme }) => theme // prettier-ignore

export const mapColor = ({ theme: { setting: { color } } }) => color // prettier-ignore
export const mapFontFace = ({ theme: { fontFace } }) => fontFace
export const mapFontFamily = ({ theme: { setting: { fontFamily } } }) => fontFamily // prettier-ignore
export const mapFontSize = ({ theme: { setting: { fontSize } } }) => fontSize // prettier-ignore
export const mapFontWeight = ({ theme: { setting: { fontWeight } } }) => fontWeight // prettier-ignore
export const mapSpacing = ({ theme: { setting: { spacing } } }) => spacing // prettier-ignore
export const mapSwatch = ({ theme: { swatch } }) => swatch
