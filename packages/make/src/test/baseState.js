import { theme } from '@airtheme/type'

const baseState = theme.base()

export const withBaseState = ({ ...args }) => ({
  theme: { ...baseState, ...args }
})

export default baseState
