import { deserializeAttribute } from '@airtheme/type'
import { formatScssVariableWithSetting } from '../utils/scss/formatScss'
import { compose, reduce } from 'fp'

const buildRules = elementPrefix => (acc, [key, val]) => ({
  ...acc,
  [formatScssVariableWithSetting(elementPrefix, key)]: val
})

// Ugh, not a huge fan of this - comeback later
const buildScssVariables = (elementPrefix, attributeContent, schema) =>
  compose(
    reduce(buildRules(elementPrefix), {}),
    Object.entries,
    deserializeAttribute
  )(attributeContent, schema)

const setting = (nextFn, accumulator, schema) =>
  nextFn(
    {
      ...accumulator,
      ...buildScssVariables('color', schema.setting.color, schema),
      ...buildScssVariables('fontFace', schema.fontFace, schema),
      ...buildScssVariables('fontFamily', schema.setting.fontFamily, schema),
      ...buildScssVariables('fontSize', schema.setting.fontSize, schema),
      ...buildScssVariables('fontWeight', schema.setting.fontWeight, schema),
      ...buildScssVariables('spacing', schema.setting.spacing, schema)
    },
    schema
  )

export default setting
