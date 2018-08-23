const baseState = {
  theme: {
    baseFontSize: '',
    baseLineHeight: '',
    baseSpacing: '',
    id: '',
    name: '',
    type: '',
    version: ''
  }
}

export const withBaseState = ({ ...args }) => ({
  theme: { ...baseState.theme, ...args }
})

export default baseState
