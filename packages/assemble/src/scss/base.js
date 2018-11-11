import { deserializeAttribute } from '@airtheme/type'
import { formatScssVariableWithBase } from '../utils/scss/formatScss'
import { compose, reduce, defaultTo } from 'fp'

const buildRules = (acc, [key, val]) => ({
  ...acc,
  [formatScssVariableWithBase(key, null)]: val
})

const buildScssVariables = (attributeContent = {}, schema) =>
  compose(
    reduce(buildRules, {}),
    Object.entries,
    defaultTo({}),
    deserializeAttribute
  )(attributeContent, schema)

const setting = (nextFn, accumulator, schema) =>
  nextFn(
    {
      ...accumulator,
      ...buildScssVariables(schema.base.baseLineHeight, schema),
      ...buildScssVariables(schema.base.baseFontSize, schema),
      ...buildScssVariables(schema.base.baseSpacing, schema)
    },
    schema
  )

export default setting
