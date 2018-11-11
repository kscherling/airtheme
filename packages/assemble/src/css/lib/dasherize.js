import humps from 'humps'
import { compose } from '@airtheme/core'
const apply = fn => arg => fn(arg)

// camelize ensures spaces are dasherized as well

const replaceSpaceDash = str => str.split(' -').join('-')
const replaceDashSpace = str => str.split('- ').join('-')
const replaceSpace = str => str.split(' ').join('-')
const trim = str => str.split('--').join('-')

const dasherize = compose(
  trim,
  apply(str => humps.decamelize(str, { separator: '-' })),
  replaceSpace,
  replaceDashSpace,
  replaceSpaceDash
)

export default dasherize
