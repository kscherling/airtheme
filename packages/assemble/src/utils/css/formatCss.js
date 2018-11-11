import { formatBemWithBase, formatBemWithSetting } from './formatBem'
import { prefixCssVariable } from './prefix'
import { compose } from '@airtheme/core'

export const formatCssVariableWithSetting = compose(
  prefixCssVariable,
  formatBemWithSetting
)

export const formatCssVariableWithBase = compose(
  prefixCssVariable,
  formatBemWithBase
)
