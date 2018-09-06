import React from 'react'
const { compose } = require('recompose')
import { withTheme } from 'styled-components'

const connectTheme = mapThemeToProps =>
  compose(
    withTheme,
    Component => ({ theme, ...props }) => (
      <Component {...Object.assign({}, props, mapThemeToProps(theme))} />
    )
  )

export default connectTheme
