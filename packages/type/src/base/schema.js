// @flow
import attribute from '../attribute'
import type { BaseST } from '../flow/BaseTypes'

/**
 * @description Base schema object.
 */

const BaseSchema: BaseST = {
  __schemaname: 'Base',
  __typename: '',
  baseFontSize: attribute.baseFontSize(),
  baseLineHeight: attribute.baseLineHeight(),
  baseSpacing: attribute.baseSpacing()
}

export default BaseSchema
