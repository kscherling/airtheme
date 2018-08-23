const updatedState = {
  theme: {
    name: 'Test Theme',
    id: '123456',
    type: 'airtheme',
    version: '1.0.0',
    baseFontSize: 16,
    baseLineHeight: 16,
    baseSpacing: 16
  }
}

export const withUpdatedState = ({ ...args }) => ({
  theme: { ...updatedState.theme, ...args }
})

export default updatedState
