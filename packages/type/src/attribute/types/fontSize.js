// @flow
import type { AttributeFontSizeT } from '../../flow/AttributeTypes'

/**
 * @description Base font face object
 */

const FontSize: AttributeFontSizeT = {
  __typename: 'FontSize',
  view: 'factor',
  viewable: ['factor', 'px', 'rem'],
  reference: 'base.baseFontSize',
  unit: 'factor',
  content: []
}

export default FontSize
