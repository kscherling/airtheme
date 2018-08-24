import { attribute, unit, theme } from '@airtheme/airtheme-type'

const baseState = {
  theme: {
    baseFontSize: '',
    baseLineHeight: '',
    baseSpacing: '',
    id: '',
    name: '',
    setting: {
      color: {},
      fontFamily: {},
      fontSize: {},
      fontWeight: {},
      spacing: {}
    },
    swatch: attribute.swatch(),
    type: '',
    version: ''
  }
}

export const withBaseState = ({ ...args }) => ({
  theme: { ...baseState.theme, ...args }
})

export default baseState
