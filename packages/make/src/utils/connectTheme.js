import React from 'react'
import { compose } from 'redux'
import { withTheme } from 'styled-components'

// NOTE: This may be unnecessary.  In any case consider moving to Make
const connectTheme = mapThemeToProps =>
  compose(
    withTheme,
    Component => ({ theme, ...props }) => (
      <Component {...Object.assign({}, props, mapThemeToProps(theme))} />
    )
  )

export default connectTheme
