import { setting, base } from '@airtheme/type'

const updatedState = {
  __schemaname: 'Theme',
  __typename: 'Base',
  base: base.base({
    baseFontSize: {},
    baseLineHeight: {},
    baseSpacing: {}
  }),
  fontFace: {},
  id: '',
  name: 'Test Theme',
  setting: setting.base({
    color: {},
    fontFamily: {},
    fontSize: {},
    fontWeight: {},
    spacing: {}
  }),
  swatch: {},
  version: '1.0.0'
}

export const withUpdatedState = ({ ...args }) => ({
  theme: { ...updatedState, ...args }
})

export default updatedState
