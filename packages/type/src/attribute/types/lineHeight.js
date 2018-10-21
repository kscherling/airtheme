// @flow
import type { AttributeLineHeightT } from '../../flow/AttributeTypes'

/**
 * @description Base line height object
 */

const LineHeight: AttributeLineHeightT = {
  __typename: 'LineHeight',
  view: 'factor',
  viewable: ['factor', 'px'],
  reference: 'base.baseFontSize',
  unit: 'factor',
  content: []
}

export default LineHeight
