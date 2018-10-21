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
 * @description Font face object
 */

export type AttributeFontFaceT = {
  __typename: 'FontFace',
  view: 'string',
  viewable: ['string'],
  reference: null,
  unit: 'string',
  content: []
}

/**
 * @description  Font family object
 */

export type AttributeFontFamilyT = {
  __typename: 'FontFamily',
  view: 'reference',
  viewable: ['reference'],
  reference: 'fontFace',
  unit: 'reference',
  content: []
}

/**
 * @description Font size object
 */

export type AttributeFontSizeT = {
  __typename: 'FontSize',
  view: 'factor' | 'px' | 'rem',
  viewable: ['factor', 'px', 'rem'],
  reference: 'base.baseFontSize',
  unit: 'factor',
  content: []
}

/**
 * @description Font weight object
 */

export type AttributeFontWeightT = {
  __typename: 'FontWeight',
  view: 'string',
  viewable: ['string'],
  reference: null,
  unit: 'string',
  content: []
}

/**
 * @description Line height object
 */

export type AttributeLineHeightT = {
  __typename: 'LineHeight',
  view: 'factor' | 'px',
  viewable: ['factor', 'px'],
  reference: 'base.baseFontSize',
  unit: 'factor',
  content: []
}

/**
 * @description Spacing object
 */

export type AttributeSpacingT = {
  __typename: 'Spacing',
  view: 'factor' | 'px',
  viewable: ['factor', 'px'],
  reference: 'base.baseSpacing',
  unit: 'factor',
  content: []
}

/**
 * @description Swatch object
 */

export type AttributeSwatchT = {
  __typename: 'Swatch',
  view: 'hexa' | 'hexa' | 'rgb' | 'rgba',
  viewable: ['hex', 'hexa', 'rgb', 'rgba'],
  reference: null,
  unit: 'hexa',
  content: []
}
