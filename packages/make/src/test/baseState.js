import { attribute, unit, theme } from '@airtheme/type'
import baseSetting from './baseSetting'

const baseState = {
  theme: {
    baseFontSize: '',
    baseLineHeight: '',
    baseSpacing: '',
    fontFace: attribute.fontFace(),
    id: '',
    name: '',
    setting: baseSetting,
    swatch: attribute.swatch(),
    type: '',
    version: ''
  }
}

export const withBaseState = ({ ...args }) => ({
  theme: { ...baseState.theme, ...args }
})

export default baseState
