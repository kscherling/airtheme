import React from 'react'
import { compose } from 'redux'
import { withTheme } from 'styled-components'

const connectTheme = mapThemeToProps =>
  compose(
    withTheme,
    Component => ({ theme, ...props }) => (
      <Component {...Object.assign({}, props, mapThemeToProps(theme))} />
    )
  )

export default connectTheme
