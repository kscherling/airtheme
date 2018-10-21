// @flow
import type {
  Typename,
  UnitTypename,
  AttributeTypename,
  Reference
} from './GlobalTypes'
import type {
  UnitST,
  UnitPxT,
  UnitFactorT,
  UnitStringT,
  UnitReferenceT,
  UnitHexaT
} from './UnitTypes'

/**
 *  @description Attribute schema type
 */

export type AttributeST = {|
  __schemaname: 'Attribute',
  __typename: AttributeTypename,
  content: UnitST | UnitST[],
  reference: Reference,
  unit: UnitTypename,
  view: UnitTypename,
  viewable: UnitTypename[]
|}

/**
 * @description Base font size type
 */

export type AttributeBaseFontSizeT = {|
  __schemaname: 'Attribute',
  __typename: 'BaseFontSize',
  content: UnitPxT,
  reference: null,
  unit: 'Px',
  view: 'Px',
  viewable: ['Px']
|}

/**
 * @description Base line height type
 */

export type AttributeBaseLineHeightT = {|
  __schemaname: 'Attribute',
  __typename: 'BaseLineHeight',
  content: UnitFactorT,
  reference: 'base.baseFontSize',
  unit: 'Factor',
  view: 'Factor' | 'Px',
  viewable: ['Factor', 'Px']
|}

/**
 * @description Base spacing type
 */

export type AttributeBaseSpacingT = {|
  __schemaname: 'Attribute',
  __typename: 'BaseSpacing',
  content: UnitPxT,
  reference: null,
  unit: 'Px',
  view: 'Px',
  viewable: ['Px']
|}

/**
 * @description Color type
 */

export type AttributeColorT = {|
  __schemaname: 'Attribute',
  __typename: 'Color',
  content: UnitHexaT[],
  reference: 'swatch',
  unit: 'Reference',
  view: 'Reference' | 'Hex' | 'Hexa' | 'Rgb' | 'Rgba',
  viewable: ['Reference', 'Hex', 'Hexa', 'Rgb', 'Rgba']
|}

/**
 * @description Font face type
 */

export type AttributeFontFaceT = {|
  __schemaname: 'Attribute',
  __typename: 'FontFace',
  content: UnitStringT[],
  reference: null,
  unit: 'String',
  view: 'String',
  viewable: ['String']
|}

/**
 * @description Font family type
 */

export type AttributeFontFamilyT = {|
  __schemaname: 'Attribute',
  __typename: 'FontFamily',
  content: UnitReferenceT[],
  reference: 'fontFace',
  unit: 'Reference',
  view: 'Reference',
  viewable: ['Reference']
|}

/**
 * @description Font size type
 */

export type AttributeFontSizeT = {|
  __schemaname: 'Attribute',
  __typename: 'FontSize',
  content: UnitPxT[],
  reference: 'base.baseFontSize',
  unit: 'Factor',
  view: 'Factor' | 'Px' | 'Rem',
  viewable: ['Factor', 'Px', 'Rem']
|}

/**
 * @description Font weight type
 */

export type AttributeFontWeightT = {|
  __schemaname: 'Attribute',
  __typename: 'FontWeight',
  content: UnitStringT[],
  reference: null,
  unit: 'String',
  view: 'String',
  viewable: ['String']
|}

/**
 * @description Line height type
 */

export type AttributeLineHeightT = {|
  __schemaname: 'Attribute',
  __typename: 'LineHeight',
  content: UnitFactorT[],
  reference: 'base.baseFontSize',
  unit: 'Factor',
  view: 'Factor' | 'Px',
  viewable: ['Factor', 'Px']
|}

/**
 * @description Spacing type
 */

export type AttributeSpacingT = {|
  __schemaname: 'Attribute',
  __typename: 'Spacing',
  content: UnitFactorT[],
  reference: 'base.baseSpacing',
  unit: 'Factor',
  view: 'Factor' | 'Px',
  viewable: ['Factor', 'Px']
|}

/**
 * @description Swatch type
 */

export type AttributeSwatchT = {|
  __schemaname: 'Attribute',
  __typename: 'Swatch',
  content: UnitReferenceT[],
  reference: null,
  unit: 'Hexa',
  view: 'Hex' | 'Hexa' | 'Rgb' | 'Rgba',
  viewable: ['Hex', 'Hexa', 'Rgb', 'Rgba']
|}
