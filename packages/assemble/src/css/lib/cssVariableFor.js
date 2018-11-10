import { bemForBase, bemForSetting } from './bemFor'
import { compose } from '@airtheme/core'

const cssVariableFor = value => `--${value}`

export const cssVariableForSetting = compose(
  cssVariableFor,
  bemForSetting
)

export const cssVariableForBase = compose(
  cssVariableFor,
  bemForBase
)

export default cssVariableFor
