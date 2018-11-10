import { deserializeAttribute } from '@airtheme/type'
import { cssVariableForSetting } from './lib/cssVariableFor'
import dasherize from './lib/dasherize'
import {
  BASE_FONT_SIZE_KEY,
  BASE_LINE_HEIGHT_KEY,
  BASE_SPACING_KEY,
  COLOR_KEY,
  FONT_FACE_KEY,
  FONT_FAMILY_KEY,
  FONT_SIZE_KEY,
  FONT_WEIGHT_KEY,
  SETTING_KEY,
  SPACING_KEY,
  SWATCH_KEY
} from '@airtheme/core'

// not a super fan of this.  Tries to ensure method is called with the proper
// arity given potential null values
const resolveKeys = (...args) => {
  const filtered = args.reduce(
    (acc, arg) => (arg ? [...acc, dasherize(arg)] : acc),
    []
  )

  return filtered.length === 1 ? [...filtered, null] : filtered
}

const buildCssVariablesFor = (elementPrefix, attributeContent, schema) =>
  Object.entries(deserializeAttribute(attributeContent, schema)).reduce(
    (acc, [key, val]) => ({
      ...acc,
      [cssVariableForSetting(...resolveKeys(elementPrefix, key))]: val
    }),
    {}
  )

const setting = (nextFn, accumulator, schema) =>
  nextFn(
    {
      ...accumulator,
      ...buildCssVariablesFor(null, schema.base.baseLineHeight, schema),
      ...buildCssVariablesFor(null, schema.base.baseFontSize, schema),
      ...buildCssVariablesFor(null, schema.base.baseSpacing, schema),
      ...buildCssVariablesFor('fontFace', schema.fontFace, schema),
      ...buildCssVariablesFor('swatch', schema.swatch, schema),
      ...buildCssVariablesFor('color', schema.setting.color, schema),
      ...buildCssVariablesFor('fontFamily', schema.setting.fontFamily, schema),
      ...buildCssVariablesFor('fontWeight', schema.setting.fontWeight, schema),
      ...buildCssVariablesFor('spacing', schema.setting.spacing, schema)
    },
    schema
  )

export default setting
