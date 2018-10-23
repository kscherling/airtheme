import { theme } from '@airtheme/type'

const baseState = theme.base()

export const withBaseState = ({ ...args }) => ({
  theme: { ...baseState.theme, ...args }
})

export default baseState
