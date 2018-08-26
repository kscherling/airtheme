export const mapName = ({ theme: { name } }) => ({ name })
export const mapVersion = ({ theme: { version } }) => ({ version })
export const mapType = ({ theme: { type } }) => ({ type })
export const mapId = ({ theme: { id } }) => ({ id })

export const mapBaseFontSize = ({ theme: { baseFontSize } }) => ({ baseFontSize }) // prettier-ignore
export const mapBaseSpacing = ({ theme: { baseSpacing } }) => ({ baseSpacing })
export const mapBaseLineHeight = ({ theme: { baseLineHeight } }) => ({ baseLineHeight }) // prettier-ignore

export const mapFontFace = ({ theme: { fontFace } }) => ({ fontFace })
export const mapFontFaceContent = ({ theme: { fontFace: { content } } }) => ({ content }) //prettier-ignore

export const mapSwatch = ({ theme: { swatch } }) => ({ swatch })
export const mapSwatchContent = ({ theme: { swatch: { content } } }) => ({ content }) // prettier-ignore

export const mapColor = ({ theme: { setting: { color } } }) => ({ color }) // prettier-ignore
export const mapColorContent = ({ theme: { setting: { color: { content } } } }) => ({ content }) // prettier-ignore

export const mapFontFamily = ({ theme: { setting: { fontFamily } } }) => ({ fontFamily }) // prettier-ignore
export const mapFontFamilyContent = ({ theme: { setting: { fontFamily: { content } } } }) => ({ content }) // prettier-ignore

export const mapFontSize = ({ theme: { setting: { fontSize } } }) => ({ fontSize }) // prettier-ignore
export const mapFontSizeContent = ({ theme: { setting: { fontSize: { content } } } }) => ({ content }) // prettier-ignore

export const mapFontWeight = ({ theme: { setting: { fontWeight } } }) => ({ fontWeight }) // prettier-ignore
export const mapFontWeightContent = ({ theme: { setting: { fontWeight: { content } } } }) => ({ content }) // prettier-ignore

export const mapSpacing = ({ theme: { setting: { spacing } } }) => ({ spacing }) // prettier-ignore
export const mapSpacingContent = ({ theme: { setting: { spacing: { content } } } }) => ({ content }) // prettier-ignore
