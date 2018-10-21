// @flow
import type { Typename } from './GlobalTypes'

/**
 *  @description Attribute schema type
 */

export type AttributeST = {
  __schemaname: 'Attribute',
  __typename: string,
  content: [] | {},
  reference: string | null,
  unit: string,
  view: string,
  viewable: []
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
 * @description Font face type
 */

export type AttributeFontFaceT = {
  __typename: 'FontFace',
  content: [],
  reference: null,
  unit: 'string',
  view: 'string',
  viewable: ['string']
}

/**
 * @description Font family type
 */

export type AttributeFontFamilyT = {
  __typename: 'FontFamily',
  content: [],
  reference: 'fontFace',
  unit: 'reference',
  view: 'reference',
  viewable: ['reference']
}

/**
 * @description Font size type
 */

export type AttributeFontSizeT = {
  __typename: 'FontSize',
  content: [],
  reference: 'base.baseFontSize',
  unit: 'factor',
  view: 'factor' | 'px' | 'rem',
  viewable: ['factor', 'px', 'rem']
}

/**
 * @description Font weight type
 */

export type AttributeFontWeightT = {
  __typename: 'FontWeight',
  content: [],
  reference: null,
  unit: 'string',
  view: 'string',
  viewable: ['string']
}

/**
 * @description Line height type
 */

export type AttributeLineHeightT = {
  __typename: 'LineHeight',
  content: [],
  reference: 'base.baseFontSize',
  unit: 'factor',
  view: 'factor' | 'px',
  viewable: ['factor', 'px']
}

/**
 * @description Spacing type
 */

export type AttributeSpacingT = {
  __typename: 'Spacing',
  content: [],
  reference: 'base.baseSpacing',
  unit: 'factor',
  view: 'factor' | 'px',
  viewable: ['factor', 'px']
}

/**
 * @description Swatch type
 */

export type AttributeSwatchT = {
  __typename: 'Swatch',
  content: [],
  reference: null,
  unit: 'hexa',
  view: 'hexa' | 'hexa' | 'rgb' | 'rgba',
  viewable: ['hex', 'hexa', 'rgb', 'rgba']
}
