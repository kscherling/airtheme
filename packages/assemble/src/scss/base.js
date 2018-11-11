import { deserializeAttribute } from '@airtheme/type'
import { formatScssVariableWithBase } from '../utils/scss/formatScss'
import { compose, reduce } from 'fp'

const buildRules = (acc, [key, val]) => ({
  ...acc,
  [formatScssVariableWithBase(key, null)]: val
})

const buildScssVariables = compose(
  reduce(buildRules, {}),
  Object.entries,
  deserializeAttribute
)

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
