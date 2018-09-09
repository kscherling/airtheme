import React from 'react'

const Svg = ({ children, ...props }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 32 32"
    {...props}
  >
    {children}
  </svg>
)

export default Svg
