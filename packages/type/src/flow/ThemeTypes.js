// @flow
import type { Typename } from './GlobalTypes'

/**
 * @description Theme schema type
 */

export type ThemeST = {
  __schemaname: 'Theme',
  __typename: ?Typename,
  base: ?{},
  fontFace: ?{},
  id: ?string,
  name: ?string,
  setting: ?{},
  swatch: ?{},
  version: ?string
}

/**
 * @description Theme `base` type
 */

export type ThemeBaseT = {
  __typename: 'ThemeBase',
  base: ?{},
  fontFace: ?{},
  id: ?string,
  name: ?string,
  setting: ?{},
  swatch: ?{},
  version: ?string
}
