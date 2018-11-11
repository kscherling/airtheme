import { deserializeAttribute } from '@airtheme/type'
import { cssVariableForBase } from './lib/cssVariableFor'
import dasherize from './lib/dasherize'

const dasherizeAll = (...arr) => arr.map(arg => (arg ? dasherize(arg) : arg))

const buildCssVariablesFor = (attributeContent, schema) => {
  return Object.entries(deserializeAttribute(attributeContent, schema)).reduce(
    (acc, [key, val]) => ({
      ...acc,
      [cssVariableForBase(...dasherizeAll(key, null))]: val
    }),
    {}
  )
}

const setting = (nextFn, accumulator, schema) =>
  nextFn(
    {
      ...accumulator,
      ...buildCssVariablesFor(schema.base.baseLineHeight, schema),
      ...buildCssVariablesFor(schema.base.baseFontSize, schema),
      ...buildCssVariablesFor(schema.base.baseSpacing, schema)
    },
    schema
  )

export default setting
