import Schema from './schema'
import * as types from './types'
import factoryFor from './factoryFor'

const { Base } = types

const setting = {
  base: factoryFor(Base, Schema)
}

export default setting
