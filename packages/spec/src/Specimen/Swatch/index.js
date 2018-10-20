import styled from 'styled-components'
import { withShade } from '@airtheme/ui'
import { cssFor } from '@airtheme/theme-helpers'

const Swatch = styled.div`
  width: 100%;
  height: 5rem;
  background: ${({ color }) => color};
`

export default withShade(Swatch)
