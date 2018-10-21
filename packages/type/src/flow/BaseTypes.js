// @flow
import type { Typename } from './GlobalTypes'
import type {
  AttributeBaseFontSizeT,
  AttributeBaseLineHeightT,
  AttributeBaseSpacingT
} from './AttributeTypes'

/**
 * @description Base Schema Type
 */

export type BaseST = {|
  __schemaname: 'Base',
  __typename: Typename,
  baseFontSize: AttributeBaseFontSizeT,
  baseLineHeight: AttributeBaseLineHeightT,
  baseSpacing: AttributeBaseSpacingT
|}

/**
 * @description Base base (default) type
 */

export type BaseBaseT = {|
  __schemaname: 'Base',
  __typename: 'Base',
  baseFontSize: AttributeBaseFontSizeT,
  baseLineHeight: AttributeBaseLineHeightT,
  baseSpacing: AttributeBaseSpacingT
|}
