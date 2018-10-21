// @flow
import unit from '../../unit'
import type { AttributeBaseFontSizeT } from '../../flow/AttributeTypes'

/**
 * @description Base font size object
 */

const BaseFontSize: AttributeBaseFontSizeT = {
  __typename: 'BaseFontSize',
  view: 'px',
  viewable: ['px'],
  reference: null,
  unit: 'px',
  content: unit.px({ name: 'baseFontSize', value: 16 })
}

export default BaseFontSize
