// @flow
import * as types from './types'
import factoryForTheme from './factoryFor'
import type { ThemeST } from '../flow/ThemeTypes'

const { Base } = types

const theme = {
  base: factoryForTheme(Base)
}

export default theme
