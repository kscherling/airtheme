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

/**
 * Base factory args type
 */

export type BaseFactoryOptions = {|
  baseFontSize: AttributeBaseFontSizeT,
  baseLineHeight: AttributeBaseLineHeightT,
  baseSpacing: AttributeBaseSpacingT
|}

/*
 * @name BaseFactoryResult
 * Base factory result type
 * This is a workaround for exact types mismatch with spread operators
 * Also spread breaks jsdocs with auto name detection
 */

export type BaseFactoryInstance = {|
  ...BaseST,
  ...BaseFactoryOptions
|}
