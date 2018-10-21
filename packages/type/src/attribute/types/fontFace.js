// @flow
import type { AttributeFontFaceT } from '../../flow/AttributeTypes'

/**
 * @description Base font face object
 */

const Color: AttributeFontFaceT = {
  __typename: 'FontFace',
  view: 'string',
  viewable: ['string'],
  reference: null,
  unit: 'string',
  content: []
}

export default Color
