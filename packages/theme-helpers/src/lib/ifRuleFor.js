// @flow

import curry from '../utils/curry'
import * as cssFor from '../cssFor'
import type { props, cssRule, unitKey, cssAttrKey } from '../flow/types'

/**
 * @param {unitKey}
 * @param {props}
 * @returns {cssRule}
 */

const ifRuleFor = (curry(
  (cssAttrKey: cssAttrKey, unitKey: unitKey, props: props) =>
    props[cssAttrKey] && cssFor[cssAttrKey](unitKey, props)
): (
  cssAttrKey: cssAttrKey,
  unitKey?: unitKey,
  props?: props
) => false | cssRule)

export default ifRuleFor
