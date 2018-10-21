// @flow
import unit from '../unit'
import type {
  AttributeBaseFontSizeT,
  AttributeBaseLineHeightT,
  AttributeBaseSpacingT,
  AttributeColorT,
  AttributeFontFaceT,
  AttributeFontFamilyT,
  AttributeFontSizeT,
  AttributeFontWeightT,
  AttributeLineHeightT,
  AttributeSpacingT,
  AttributeSwatchT
} from '../flow/AttributeTypes'

/**
 * Base font size object
 */

export const BaseFontSize: AttributeBaseFontSizeT = {
  __schemaname: 'Attribute',
  __schemaname: 'Attribute',
  __typename: 'BaseFontSize',
  view: 'Px',
  viewable: ['Px'],
  reference: null,
  unit: 'Px',
  content: unit.px()
}

/**
 * Base line height object
 */

export const BaseLineHeight: AttributeBaseLineHeightT = {
  __schemaname: 'Attribute',
  __schemaname: 'Attribute',
  __typename: 'BaseLineHeight',
  content: unit.factor(),
  reference: 'base.baseFontSize',
  unit: 'Factor',
  view: 'Factor',
  viewable: ['Factor', 'Px']
}

/**
 * Base spacing object
 */

export const BaseSpacing: AttributeBaseSpacingT = {
  __schemaname: 'Attribute',
  __schemaname: 'Attribute',
  __typename: 'BaseSpacing',
  content: unit.px(),
  reference: null,
  unit: 'Px',
  view: 'Px',
  viewable: ['Px']
}

/**
 * Color object
 */

export const Color: AttributeColorT = {
  __schemaname: 'Attribute',
  __schemaname: 'Attribute',
  __typename: 'Color',
  view: 'Reference',
  viewable: ['Reference', 'Hex', 'Hexa', 'Rgb', 'Rgba'],
  reference: 'swatch',
  unit: 'Reference',
  content: []
}

/**
 * Font face object
 */

export const FontFace: AttributeFontFaceT = {
  __schemaname: 'Attribute',
  __schemaname: 'Attribute',
  __typename: 'FontFace',
  view: 'String',
  viewable: ['String'],
  reference: null,
  unit: 'String',
  content: []
}

/**
 * Font family object
 */

export const FontFamily: AttributeFontFamilyT = {
  __schemaname: 'Attribute',
  __schemaname: 'Attribute',
  __typename: 'FontFamily',
  view: 'Reference',
  viewable: ['Reference'],
  reference: 'fontFace',
  unit: 'Reference',
  content: []
}

/**
 * Font size object
 */

export const FontSize: AttributeFontSizeT = {
  __schemaname: 'Attribute',
  __typename: 'FontSize',
  view: 'Factor',
  viewable: ['Factor', 'Px', 'Rem'],
  reference: 'base.baseFontSize',
  unit: 'Factor',
  content: []
}

/**
 * Font weight object
 */

export const FontWeight: AttributeFontWeightT = {
  __schemaname: 'Attribute',
  __typename: 'FontWeight',
  view: 'String',
  viewable: ['String'],
  reference: null,
  unit: 'String',
  content: []
}

/**
 * Line height object
 */

export const LineHeight: AttributeLineHeightT = {
  __schemaname: 'Attribute',
  __typename: 'LineHeight',
  view: 'Factor',
  viewable: ['Factor', 'Px'],
  reference: 'base.baseFontSize',
  unit: 'Factor',
  content: []
}

/**
 * Spacing object
 */

export const Spacing: AttributeSpacingT = {
  __schemaname: 'Attribute',
  __typename: 'Spacing',
  content: [],
  reference: 'base.baseSpacing',
  unit: 'Factor',
  view: 'Factor',
  viewable: ['Factor', 'Px']
}

/**
 * Swatch object
 */

export const Swatch: AttributeSwatchT = {
  __schemaname: 'Attribute',
  __typename: 'Swatch',
  content: [],
  reference: null,
  unit: 'Hexa',
  view: 'Hexa',
  viewable: ['Hex', 'Hexa', 'Rgb', 'Rgba']
}
