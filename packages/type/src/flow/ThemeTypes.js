// @flow
import type { Id, Name, Typename, Version } from './GlobalTypes'
import type { SettingBaseT } from './SettingTypes'
import type { BaseBaseT } from './BaseTypes'
import type { AttributeFontFaceT, AttributeSwatchT } from './AttributeTypes'

/**
 * Theme schema type
 */

export type ThemeST = {|
  __schemaname: 'Theme',
  __typename: Typename,
  base: BaseBaseT,
  fontFace: AttributeFontFaceT,
  id: Id,
  name: Name,
  setting: SettingBaseT,
  swatch: AttributeSwatchT,
  version: Version
|}

/**
 * Theme base type
 */

export type ThemeBaseT = {|
  __schemaname: 'Theme',
  __typename: Typename,
  base: BaseBaseT,
  fontFace: AttributeFontFaceT,
  id: Id,
  name: Name,
  setting: SettingBaseT,
  swatch: AttributeSwatchT,
  version: Version
|}

/**
 * Theme factory args type
 */

export type ThemeFactoryOptions = {|
  base: ?BaseBaseT,
  fontFace: ?AttributeFontFaceT,
  id: ?Id,
  name: ?Name,
  setting: ?SettingBaseT,
  swatch: ?AttributeSwatchT,
  version: ?Version
|}

/*
 * @name ThemeFactoryResult
 * Theme factory result type
 * This is a workaround for exact types mismatch with spread operators
 * Also spread breaks jsdocs with auto name detection
 */

export type ThemeFactoryInstance = {|
  ...ThemeST,
  ...ThemeFactoryOptions
|}
