export const mapName = ({ theme: { name } }) => ({ name })
export const mapVersion = ({ theme: { version } }) => ({ version })
export const mapType = ({ theme: { type } }) => ({ type })
export const mapId = ({ theme: { id } }) => ({ id })

export const mapBaseFontSize = ({ theme: { baseFontSize } }) => ({ baseFontSize }) // prettier-ignore
export const mapBaseSpacing = ({ theme: { baseSpacing } }) => ({ baseSpacing })
export const mapBaseLineHeight = ({ theme: { baseLineHeight } }) => ({ baseLineHeight }) // prettier-ignore
export const mapFontFace = ({ theme: { fontFace } }) => ({ fontFace })
export const mapSwatch = ({ theme: { swatch } }) => ({ swatch })

export const mapColor = ({ theme: { setting: { color } } }) => ({ color }) // prettier-ignore
export const mapFontFamily = ({ theme: { setting: { fontFamily } } }) => ({ fontFamily }) // prettier-ignore
export const mapFontSize = ({ theme: { setting: { fontSize } } }) => ({ fontSize }) // prettier-ignore
export const mapFontWeight = ({ theme: { setting: { fontWeight } } }) => ({ fontWeight }) // prettier-ignore
export const Spacing = ({ theme: { setting: { spacing } } }) => ({ spacing }) // prettier-ignore
