// @flow
import attribute from '../../attribute'
import type { BaseBaseT } from '../../flow/BaseTypes'

/**
 * @description Base base object type
 */

const Base: BaseBaseT = {
  __typename: 'BaseBase',
  baseFontSize: attribute.baseFontSize(),
  baseLineHeight: attribute.baseLineHeight(),
  baseSpacing: attribute.baseSpacing()
}
