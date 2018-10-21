// @flow
import type { AttributeFontWeightT } from '../../flow/AttributeTypes'

/**
 * @description Base font face object
 */

const FontWeight: AttributeFontWeightT = {
  __typename: 'FontWeight',
  view: 'string',
  viewable: ['string'],
  reference: null,
  unit: 'string',
  content: []
}

export default FontWeight
