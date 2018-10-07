import { withBaseSetting } from './baseSetting'
import { withBaseBase } from './baseBase'

const updatedState = {
  theme: {
    object: 'theme',
    fontFace: {},
    id: '123456',
    name: 'Test Theme',
    base: withBaseBase({
      baseFontSize: {},
      baseLineHeight: {},
      baseSpacing: {}
    }),
    setting: withBaseSetting({
      color: {},
      fontFamily: {},
      fontSize: {},
      fontWeight: {},
      spacing: {}
    }),
    swatch: { type: 'swatch' },
    version: '1.0.0'
  }
}

export const withUpdatedState = ({ ...args }) => ({
  theme: { ...updatedState.theme, ...args }
})

export default updatedState
