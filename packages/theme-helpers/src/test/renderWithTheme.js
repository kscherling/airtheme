import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from 'react-testing-library'
import defaultTheme from './theme'

const renderWithTheme = (ui, theme = defaultTheme, ...options) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options)

export default renderWithTheme
