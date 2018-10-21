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
