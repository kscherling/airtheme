import { withBaseSetting } from './baseSetting'

const updatedState = {
  theme: {
    baseFontSize: 16,
    baseLineHeight: 16,
    baseSpacing: 16,
    fontFace: {},
    id: '123456',
    name: 'Test Theme',
    setting: withBaseSetting({
      color: {},
      fontFamily: {},
      fontSize: {},
      fontWeight: {},
      spacing: {}
    }),
    swatch: { type: 'swatch' },
    type: '',
    version: '1.0.0'
  }
}

export const withUpdatedState = ({ ...args }) => ({
  theme: { ...updatedState.theme, ...args }
})

export default updatedState
