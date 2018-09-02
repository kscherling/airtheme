import { attribute } from '@airtheme/type'
import { baseSchema } from '@airtheme/type'

const baseBase = {
  object: baseSchema.object,
  baseFontSize: attribute.baseFontSize(),
  baseLineHeight: attribute.baseLineHeight(),
  baseSpacing: attribute.baseSpacing()
}

export const withBaseBase = ({ ...args }) => ({ ...baseBase, ...args })

export default baseBase
