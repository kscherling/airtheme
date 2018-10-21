// @flow
import type { Typename } from './GlobalTypes'

/**
 * @description Base Schema Type
 */

export type BaseST = {
  __schemaname: 'Base',
  __typename: ?Typename,
  baseFontSize: any,
  baseLineHeight: any,
  baseLineHeight: any
}

/**
 * @description Base base (default) type
 */

export type BaseBaseT = {
  __typename: 'BaseBase',
  baseFontSize: string,
  baseLineHeight: string,
  baseLineHeight: string
}
