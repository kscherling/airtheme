import { attribute, unit, theme } from '@airtheme/type'
import baseSetting from './baseSetting'
import baseBase from './baseBase'
import { themeSchema } from '@airtheme/type'

const baseState = {
  theme: {
    id: '',
    name: '',
    object: themeSchema.object,
    version: themeSchema.version,
    base: baseBase,
    fontFace: attribute.fontFace(),
    swatch: attribute.swatch(),
    setting: baseSetting
  }
}

export const withBaseState = ({ ...args }) => ({
  theme: { ...baseState.theme, ...args }
})

export default baseState
