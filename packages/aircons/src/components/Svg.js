import React from 'react'
import styled from 'styled-components'

const SvgEl = styled.svg`
  fill: currentColor;

  path {
    fill: currentColor;
  }
`

const Svg = ({ children, title, ...props }) => (
  <SvgEl width="17" height="16" viewBox="0 0 17 16" {...props}>
    <title>{title}</title>
    {children}
  </SvgEl>
)

export default Svg
