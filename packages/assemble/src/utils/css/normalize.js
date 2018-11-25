import humps from 'humps'
import { compose } from '@airtheme/core'

// because too lazy to figure out regex
const replaceSpaceDash = str => str.split(' -').join('-')
const replaceDashSpace = str => str.split('- ').join('-')
const replaceSpace = str => str.split(' ').join('-')
const apply = fn => arg => fn(arg)
const trim = str => str.split('--').join('-')
const safeMap = fn => arr => arr.map(arg => (arg ? fn(arg) : arg))

const normalize = compose(
  trim,
  apply(str => humps.decamelize(str, { separator: '-' })),
  replaceSpace,
  replaceDashSpace,
  replaceSpaceDash
)

export const normalizeAll = safeMap(normalize)

export default normalize
