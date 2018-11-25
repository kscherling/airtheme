import { deserializeAttribute } from '@airtheme/type'
import { formatCssVariableWithBase } from '../utils/css/formatCss'
import { compose, reduce, defaultTo } from 'fp'

const buildRules = (acc, [key, val]) => ({
  ...acc,
  [formatCssVariableWithBase(key, null)]: val
})

const buildCssVariables = compose(
  reduce(buildRules, {}),
  Object.entries,
  defaultTo({}),
  deserializeAttribute
)

const setting = (nextFn, accumulator, schema) =>
  nextFn(
    {
      ...accumulator,
      ...buildCssVariables(schema.base.baseLineHeight, schema),
      ...buildCssVariables(schema.base.baseFontSize, schema),
      ...buildCssVariables(schema.base.baseSpacing, schema)
    },
    schema
  )

export default setting
