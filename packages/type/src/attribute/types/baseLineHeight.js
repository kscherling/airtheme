import unit from '../../unit'
import type { AttributeBaseLineHeightT } from '../../flow/AttributeTypes'

/**
 * @description Base line height object
 */

const BaseLineHeight: AttributeBaseLineHeightT = {
  __typename: 'BaseLineHeight',
  view: 'factor' | 'px',
  viewable: ['factor', 'px'],
  reference: 'base.baseFontSize',
  unit: 'factor',
  content: unit.factor({ name: 'baseLineHeight', value: 1.15 })
}

export default BaseLineHeight
