import * as types from './types'
import factoryFor from './factoryFor'

const { Base } = types

const root = {
  base: factoryFor(Base)
}

export default root
