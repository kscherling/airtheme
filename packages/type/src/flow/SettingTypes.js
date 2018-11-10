// @flow
import type { Typename } from './GlobalTypes'
import type {
  AttributeFontFamilyT,
  AttributeFontSizeT,
  AttributeFontWeightT,
  AttributeSpacingT,
  AttributeColorT
} from '../flow/AttributeTypes'

/**
 * @description Setting schema type
 */

export type SettingST = {|
  __schemaname: 'Setting',
  __typename: Typename,
  color: AttributeColorT,
  fontFamily: AttributeFontFamilyT,
  fontSize: AttributeFontSizeT,
  fontWeight: AttributeFontFamilyT,
  spacing: AttributeSpacingT
|}

/**
 * @description Setting base (default) type
 */

export type SettingBaseT = {|
  __schemaname: 'Setting',
  __typename: 'Base',
  color: AttributeColorT,
  fontFamily: AttributeFontFamilyT,
  fontSize: AttributeFontSizeT,
  fontWeight: AttributeFontFamilyT,
  spacing: AttributeSpacingT
|}

/**
 * Setting factory args type
 */

export type SettingFactoryOptions = {|
  color: AttributeColorT,
  fontFamily: AttributeFontFamilyT,
  fontSize: AttributeFontSizeT,
  fontWeight: AttributeFontFamilyT,
  spacing: AttributeSpacingT
|}

/*
 * @name SettingFactoryResult
 * Setting factory result type
 * This is a workaround for exact types mismatch with spread operators
 * Also spread breaks jsdocs with auto name detection
 */

export type SettingFactoryInstance = {|
  ...SettingST,
  ...SettingFactoryOptions
|}
