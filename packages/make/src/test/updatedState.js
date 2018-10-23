import { withBaseSetting } from './baseSetting'
import { withBaseBase } from './baseBase'

const updatedState = {
  theme: {
    __schemaname: 'Theme',
    __typename: 'Base',
    base: withBaseBase({
      baseFontSize: {},
      baseLineHeight: {},
      baseSpacing: {}
    }),
    fontFace: {},
    id: '',
    name: 'Test Theme',
    setting: withBaseSetting({
      color: {},
      fontFamily: {},
      fontSize: {},
      fontWeight: {},
      spacing: {}
    }),
    swatch: {},
    version: '1.0.0'
  }
}

export const withUpdatedState = ({ ...args }) => ({
  theme: { ...updatedState, ...args }
})

export default updatedState
