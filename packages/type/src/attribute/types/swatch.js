// @flow
import type { AttributeSwatchT } from '../../flow/AttributeTypes'

/**
 * @description Base font face object
 */

const Swatch: AttributeSwatchT = {
  __typename: 'Swatch',
  view: 'hexa',
  viewable: ['hex', 'hexa', 'rgb', 'rgba'],
  reference: null,
  unit: 'hexa',
  content: []
}

export default Swatch
