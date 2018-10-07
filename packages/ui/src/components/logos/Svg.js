import React from 'react'
import styled from 'styled-components'

const DEFAULT_VIEWBOX = '0 0 64 64'

const SvgEl = styled.svg`
  fill: currentColor;

  path {
    fill: currentColor;
  }
`

const Svg = ({ children, viewBox = DEFAULT_VIEWBOX, ...props }) => (
  <SvgEl viewBox={viewBox} {...props}>
    {children}
  </SvgEl>
)

export default Svg
