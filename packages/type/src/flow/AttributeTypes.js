// @flow
import type { Typename } from './GlobalTypes'

/**
 *  @description Attribute Schema Type
 */

export type AttributeST = {
  __schemaname: 'Attribute',
  __typename: ?Typename,
  content: ?[] | {},
  reference: ?string,
  unit: ?string,
  view: ?[],
  viewable: ?[]
}

/**
 * @description Base font size type
 */

export type AttributeBaseFontSizeT = {
  __typename: 'BaseFontSize',
  content: {},
  reference: null,
  unit: 'px',
  view: 'px',
  viewable: ['px']
}

/**
 * @description Base line height type
 */

export type AttributeBaseLineHeightT = {
  __typename: 'BaseLineHeight',
  content: {},
  reference: 'base.baseFontSize',
  unit: 'factor',
  view: 'factor' | 'px',
  viewable: ['factor', 'px']
}

/**
 * @description Base spacing type
 */

export type AttributeBaseSpacingT = {
  __typename: 'BaseSpacing',
  content: {},
  reference: null,
  unit: 'px',
  view: 'px',
  viewable: ['px']
}

/**
 * @description Color type
 */

export type AttributeColorT = {
  __typename: 'Color',
  view: 'reference' | 'hex' | 'hexa' | 'rgb' | 'rgba',
  viewable: ['reference', 'hex', 'hexa', 'rgb', 'rgba'],
  reference: 'swatch',
  unit: 'reference',
  content: []
}

/**
 * @description Base font size object
 */

export type AttributeFontFaceT = {
  __typename: 'FontFace',
  view: 'string',
  viewable: ['string'],
  reference: null,
  unit: 'string',
  content: []
}
