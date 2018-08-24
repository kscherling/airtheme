import { attribute, unit, theme } from '@airtheme/airtheme-type'
import baseSetting from './baseSetting'

const baseState = {
  theme: {
    baseFontSize: '',
    baseLineHeight: '',
    baseSpacing: '',
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
