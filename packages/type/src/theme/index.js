// @flow
import Schema from './schema'
import * as types from './types'
import factoryFor from './factoryFor'

const { Base } = types

const theme = {
  base: factoryFor(Base, Schema)
}

export default theme
