import { attribute, unit, theme } from '@airtheme/airtheme-type'

const baseState = {
  theme: {
    baseFontSize: '',
    baseLineHeight: '',
    baseSpacing: '',
    id: '',
    name: '',
    swatch: attribute.swatch(),
    type: '',
    version: ''
  }
}

export const withBaseState = ({ ...args }) => ({
  theme: { ...baseState.theme, ...args }
})

export default baseState
