const baseState = {
  theme: {
    baseFontSize: '',
    baseLineHeight: '',
    baseSpacing: '',
    id: '',
    name: '',
    swatch: {
      content: [],
      display: 'hexa',
      displays: ['hex', 'hexa', 'rgb', 'rgba'],
      reference: null,
      type: 'swatch',
      unit: 'hexa'
    },
    type: '',
    version: ''
  }
}

export const withBaseState = ({ ...args }) => ({
  theme: { ...baseState.theme, ...args }
})

export default baseState
