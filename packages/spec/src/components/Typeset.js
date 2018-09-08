import styled from 'styled-components'
import { typeset } from '../constants/typography'
import { baseTypography } from '../utils/styleHelpers'

const Typeset = styled.div.attrs({
  children: typeset
})`
  transform: font-size 0.2s linear;
  word-break: break-all;
  ${baseTypography};
`

export default Typeset
