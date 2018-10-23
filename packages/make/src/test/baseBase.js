import { attribute, base, unit } from '@airtheme/type'

const baseBase = base.base()

export const withBaseBase = ({ ...args }) => ({ ...baseBase, ...args })

export default baseBase
