// @flow
import type { AttributeColorT } from '../../flow/AttributeTypes'

/**
 * @description Base font size object
 */

const Color: AttributeColorT = {
  __typename: 'Color',
  view: 'reference',
  viewable: ['reference', 'hex', 'hexa', 'rgb', 'rgba'],
  reference: 'swatch',
  unit: 'reference',
  content: []
}

export default Color
