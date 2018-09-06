import React from 'react'
const tinycolor = require('tinycolor2')

const withShade = Component => ({ color, ...rest }) => {
  const tColor = tinycolor(color)

  return (
    <Component
      color={color}
      isDark={tColor.isDark()}
      isLight={tColor.isLight()}
      {...rest}
    />
  )
}

export const isLight = css => ({ isLight }) => isLight && css
export const isDark = css => ({ isDark }) => isDark && css

export default withShade
