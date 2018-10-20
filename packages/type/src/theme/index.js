// @flow
import schema from './schema'
import base from './types/base'
import factoryFor from './factoryFor'

type Theme = {
  object: string,
  name: string,
  version: number
}

type ThemeTypes = {
  base: Theme
}

const theme: ThemeTypes = {
  base: factoryFor(base, schema)
}

export default theme
