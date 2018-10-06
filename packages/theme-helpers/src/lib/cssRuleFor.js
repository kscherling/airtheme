// @flow

import { css } from 'styled-components'
import mapForAttr from './mapForAttr'
import curry from '../utils/curry'
import invariant from 'invariant'
import getWithContext from './getWithContext'

import type {
  cssAttr,
  cssRule,
  mapContextFn,
  props,
  unitKey
} from '../flow/types'

/**
 * Constructs a styled-components cssRule
 * @param {cssAttr}
 * @param {unitKey}
 * @param {props}
 * @returns {cssRule}
 */

const cssRuleFor = (curry(
  (cssAttr: cssAttr, unitKey: unitKey, props: props) =>
    css`
      ${cssAttr}: ${getWithContext(mapForAttr[cssAttr])(unitKey, props)};
    `
): cssRule)

export default cssRuleFor
