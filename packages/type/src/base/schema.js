// @flow
import attribute from '../attribute'
import type { BaseST } from '../flow/BaseTypes'

/**
 * @description Base schema object.
 */

const Base: BaseST = {
  __schemaname: 'Base',
  __typename: 'Base',
  baseFontSize: attribute.baseFontSize(),
  baseLineHeight: attribute.baseLineHeight(),
  baseSpacing: attribute.baseSpacing()
}

export default Base
