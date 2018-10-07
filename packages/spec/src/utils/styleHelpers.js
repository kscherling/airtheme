import { css } from 'styled-components'

export const baseTypography = ({ theme }) => css`
  line-height: ${theme.baseLineHeight};
  font-size: ${theme.baseFontSize};
`
