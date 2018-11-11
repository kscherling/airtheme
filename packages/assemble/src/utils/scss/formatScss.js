import { formatBemWithBase, formatBemWithSetting } from '../css/formatBem'
import { prefixScssVariable } from './prefix'
import { compose } from '@airtheme/core'

export const formatScssVariableWithSetting = compose(
  prefixScssVariable,
  formatBemWithSetting
)

export const formatScssVariableWithBase = compose(
  prefixScssVariable,
  formatBemWithBase
)
