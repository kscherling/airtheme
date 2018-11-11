import { deserializeAttribute } from '@airtheme/type'
import { formatCssVariableWithSetting } from '../utils/css/formatCss'
import { compose, reduce } from 'fp'

const buildRules = elementPrefix => (acc, [key, val]) => ({
  ...acc,
  [formatCssVariableWithSetting(elementPrefix, key)]: val
})

// Ugh, not a huge fan of this - comeback later
const buildCssVariables = (elementPrefix, attributeContent, schema) =>
  compose(
    reduce(buildRules(elementPrefix), {}),
    Object.entries,
    deserializeAttribute
  )(attributeContent, schema)

const setting = (nextFn, accumulator, schema) =>
  nextFn(
    {
      ...accumulator,
      ...buildCssVariables('color', schema.setting.color, schema),
      ...buildCssVariables('fontFace', schema.fontFace, schema),
      ...buildCssVariables('fontFamily', schema.setting.fontFamily, schema),
      ...buildCssVariables('fontSize', schema.setting.fontSize, schema),
      ...buildCssVariables('fontWeight', schema.setting.fontWeight, schema),
      ...buildCssVariables('spacing', schema.setting.spacing, schema)
    },
    schema
  )

export default setting
