import unit from '../../unit'
import type { AttributeBaseLineHeightT } from '../../flow/AttributeTypes'

/**
 * @description Base line height object
 */

const BaseLineHeight: AttributeBaseLineHeightT = {
  __typename: 'BaseLineHeight',
  content: unit.factor({ name: 'baseLineHeight', value: 1.15 }),
  reference: 'base.baseFontSize',
  unit: 'factor',
  view: 'factor',
  viewable: ['factor', 'px']
}

export default BaseLineHeight
