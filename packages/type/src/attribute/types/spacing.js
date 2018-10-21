// @flow
import type { AttributeSpacingT } from '../../flow/AttributeTypes'

/**
 * @description Base font face object
 */

const Spacing: AttributeSpacingT = {
  __typename: 'Spacing',
  view: 'factor',
  viewable: ['factor', 'px'],
  reference: 'base.baseSpacing',
  unit: 'factor',
  content: []
}

export default Spacing
