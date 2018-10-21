// @flow
import type { Id, Name, Typename, Version } from './GlobalTypes'
import type { SettingBaseT } from './SettingTypes'
import type { BaseBaseT } from './BaseTypes'
import type { AttributeFontFaceT, AttributeSwatchT } from './AttributeTypes'

/**
 * @description Theme schema type
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
 * @description Theme base type
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
 * @description Theme factory args type
 */

export type ThemeFactoryProps = {|
  base: BaseBaseT,
  fontFace: AttributeFontFaceT,
  id: Id,
  name: Name,
  setting: SettingBaseT,
  swatch: AttributeSwatchT,
  version: Version
|}
