// @flow
export type Typename = string

/**
 * @description Base Schema Type
 */

export type Base = {
  __schemaname: 'Base',
  __typename: ?Typename,
  baseFontSize: any,
  baseLineHeight: any,
  baseLineHeight: any
}

/**
 *  @description Attribute Schema Type
 */

export type Attribute = {
  __schemaname: 'Attribute',
  __typename: ?Typename,
  reference: ?string,
  unit: ?string,
  view: ?[],
  viewable: ?[]
}

/**
 * @description Unit Schema Type
 */

export type Unit = {
  __schemaname: 'Base',
  __typename: ?Typename,
  name: ?string,
  ordinal: ?number,
  value: ?string
}

/**
 * @description Setting Schema Type
 */

export type Setting = {
  __schemaname: 'Setting',
  __typename: ?Typename,
  color: ?{},
  fontFamily: ?{},
  fontSize: ?{},
  fontWeight: ?{},
  spacing: ?{}
}

/**
 * Theme Schema Type
 */

export type Theme = {
  __schemaname: 'Theme',
  __typename: ?Typename,
  base: ?Base,
  fontFace: ?{},
  id: ?string,
  name: ?string,
  setting: ?{},
  swatch: ?{},
  version: ?string
}
