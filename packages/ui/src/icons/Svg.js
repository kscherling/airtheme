import React from 'react'
import styled from 'styled-components'

const SvgEl = styled.svg`
  fill: currentColor;

  path {
    fill: currentColor;
  }
`

const Svg = ({ children, ...props }) => (
  <SvgEl
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 32 32"
    {...props}
  >
    {children}
  </SvgEl>
)

export default Svg
