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
 * @description Base font size object
 */

export const BaseFontSize: AttributeBaseFontSizeT = {
  __typename: 'BaseFontSize',
  view: 'px',
  viewable: ['px'],
  reference: null,
  unit: 'px',
  content: unit.px({ name: 'baseFontSize', value: 16 })
}

/**
 * @description Base line height object
 */

export const BaseLineHeight: AttributeBaseLineHeightT = {
  __typename: 'BaseLineHeight',
  content: unit.factor({ name: 'baseLineHeight', value: 1.15 }),
  reference: 'base.baseFontSize',
  unit: 'factor',
  view: 'factor',
  viewable: ['factor', 'px']
}

/**
 * @description Base spacing object
 */

export const BaseSpacing: AttributeBaseSpacingT = {
  __typename: 'BaseSpacing',
  content: unit.px({ name: 'baseSpacing', value: 16 }),
  reference: null,
  unit: 'px',
  view: 'px',
  viewable: ['px']
}

/**
 * @description Color object
 */

export const Color: AttributeColorT = {
  __typename: 'Color',
  view: 'reference',
  viewable: ['reference', 'hex', 'hexa', 'rgb', 'rgba'],
  reference: 'swatch',
  unit: 'reference',
  content: []
}

/**
 * @description Font face object
 */

export const FontFace: AttributeFontFaceT = {
  __typename: 'FontFace',
  view: 'string',
  viewable: ['string'],
  reference: null,
  unit: 'string',
  content: []
}

/**
 * @description Font family object
 */

export const FontFamily: AttributeFontFamilyT = {
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

export const FontSize: AttributeFontSizeT = {
  __typename: 'FontSize',
  view: 'factor',
  viewable: ['factor', 'px', 'rem'],
  reference: 'base.baseFontSize',
  unit: 'factor',
  content: []
}

/**
 * @description Font weight object
 */

export const FontWeight: AttributeFontWeightT = {
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

export const LineHeight: AttributeLineHeightT = {
  __typename: 'LineHeight',
  view: 'factor',
  viewable: ['factor', 'px'],
  reference: 'base.baseFontSize',
  unit: 'factor',
  content: []
}

/**
 * @description Spacing object
 */

export const Spacing: AttributeSpacingT = {
  __typename: 'Spacing',
  view: 'factor',
  viewable: ['factor', 'px'],
  reference: 'base.baseSpacing',
  unit: 'factor',
  content: []
}

/**
 * @description Swatch object
 */

export const Swatch: AttributeSwatchT = {
  __typename: 'Swatch',
  view: 'hexa',
  viewable: ['hex', 'hexa', 'rgb', 'rgba'],
  reference: null,
  unit: 'hexa',
  content: []
}
