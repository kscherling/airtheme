// @flow
import * as types from './types'
import factoryForTheme from './factoryFor'

const { Base } = types

const theme = {
  base: factoryForTheme(Base)
}

export default theme
