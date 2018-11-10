// @flow
import type { Typename } from './GlobalTypes'

type Name = string
type Ordinal = number
type Value = string

/**
 * Unit schema type
 */

export type UnitST = {|
  __schemaname: 'Unit',
  __typename: Typename,
  name: Name,
  ordinal: Ordinal,
  value: Value
|}

/**
 * Unit factor type
 */

export type UnitFactorT = {|
  __schemaname: 'Unit',
  __typename: 'Factor',
  name: Name,
  ordinal: Ordinal,
  value: Value
|}

/**
 * Unit hex type
 */

export type UnitHexT = {|
  __schemaname: 'Unit',
  __typename: 'Hex',
  name: Name,
  ordinal: Ordinal,
  value: Value
|}

/**
 * Unit hexa type
 */

export type UnitHexaT = {|
  __schemaname: 'Unit',
  __typename: 'Hexa',
  name: Name,
  ordinal: Ordinal,
  value: Value
|}

/**
 * Unit px type
 */

export type UnitPxT = {|
  __schemaname: 'Unit',
  __typename: 'Px',
  name: Name,
  ordinal: Ordinal,
  value: Value
|}

/**
 * Unit reference type
 */

export type UnitReferenceT = {|
  __schemaname: 'Unit',
  __typename: 'Reference',
  name: Name,
  ordinal: Ordinal,
  value: Value
|}

/**
 * Unit rem type
 */

export type UnitRemT = {|
  __schemaname: 'Unit',
  __typename: 'Rem',
  name: Name,
  ordinal: Ordinal,
  value: Value
|}

/**
 * Unit rgb type
 */

export type UnitRgbT = {|
  __schemaname: 'Unit',
  __typename: 'Rgb',
  name: Name,
  ordinal: Ordinal,
  value: Value
|}

/**
 * Unit rgba type
 */

export type UnitRgbaT = {|
  __schemaname: 'Unit',
  __typename: 'Rgba',
  name: Name,
  ordinal: Ordinal,
  value: Value
|}

/**
 * Unit rgba type
 */

export type UnitStringT = {|
  __schemaname: 'Unit',
  __typename: 'String',
  name: Name,
  ordinal: Ordinal,
  value: Value
|}

/**
 * Theme factory args type
 */

export type UnitFactoryOptions = {|
  name: ?Name,
  ordinal: ?Ordinal,
  value: ?Value
|}

/*
 * @name ThemeFactoryResult
 * Theme factory result type
 * This is a workaround for exact types mismatch with spread operators
 * Also spread breaks jsdocs with auto name detection
 */

export type UnitFactoryInstance = {|
  ...UnitST,
  ...UnitFactoryOptions
|}
