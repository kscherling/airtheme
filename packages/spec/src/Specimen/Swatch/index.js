import styled from 'styled-components'
import { withShade } from '@airtheme/ui'
import { cssFor } from '@airtheme/theme-helpers'

const Swatch = styled.div`
  width: 100%;
  height: 200px;
  background: ${({ color }) => color};
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
`

export default withShade(Swatch)
