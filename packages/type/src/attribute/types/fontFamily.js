// @flow
import type { AttributeFontFamilyT } from '../../flow/AttributeTypes'

/**
 * @description Base font face object
 */

const FontFamily: AttributeFontFamilyT = {
  __typename: 'FontFamily',
  view: 'reference',
  viewable: ['reference'],
  reference: 'fontFace',
  unit: 'reference',
  content: []
}

export default FontFamily
