import { attribute, unit, theme } from '@airtheme/type'
import baseSetting from './baseSetting'
import baseBase from './baseBase'
import { themeSchema } from '@airtheme/type'

const baseState = {
  theme: {
    baseFontSize: '',
    baseLineHeight: '',
    baseSpacing: '',
    fontFace: attribute.fontFace(),
    id: '',
    name: '',
    base: baseBase,
    setting: baseSetting,
    swatch: attribute.swatch(),
    object: themeSchema.object,
    version: themeSchema.version
  }
}

export const withBaseState = ({ ...args }) => ({
  theme: { ...baseState.theme, ...args }
})

export default baseState
