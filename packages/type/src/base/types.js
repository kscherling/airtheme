// @flow
import attribute from '../attribute'
import type { BaseBaseT } from '../flow/BaseTypes'

/**
 * @description Base base (default) type
 */

export const Base: BaseBaseT = {
  __schemaname: 'Base',
  __typename: 'Base',
  baseFontSize: attribute.baseFontSize(),
  baseLineHeight: attribute.baseLineHeight(),
  baseSpacing: attribute.baseSpacing()
}
