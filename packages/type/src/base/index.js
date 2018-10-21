import * as types from './types'
import factoryFor from './factoryFor'
import Schema from './schema'

const { Base } = types

const root = {
  base: factoryFor(Base, Schema)
}

export default root
