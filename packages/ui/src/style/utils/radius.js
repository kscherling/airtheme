import { css } from 'styled-components'

export const round = ({ dimension = '2rem' }) => css`
  border-radius: 100rem;
  width: ${dimension};
  height: ${dimension};
`
