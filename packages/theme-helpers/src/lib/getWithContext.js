// @flow

import curry from './curry'
import compose from './compose'

import type {
  mapContextFn,
  props,
  unitKey,
  unitValue,
  unitContext
} from '../flow/types'

/**
 * Curried function returning a `unitValue` for given context, key, and props
 * @param {mapContextFn}
 * @param {unitKey}
 * @param {props}
 */

const getWithContext = curry(
  (mapContextFn: mapContextFn, unitKey: string, props: props) =>
    (get(unitKey)(connectContext(mapContextFn)(props)): unitValue)
)

/**
 * Applies a mapContextFn to props
 * @param {mapContextFn}
 * @param {props}
 * @returns {unitContext}
 */

const connectContext = (mapContextFn: mapContextFn) =>
  (props => mapContextFn(props): (props: props) => unitContext)

/**
 * Description
 * @param {unitKey}
 * @param {unitContext}
 * @returns {unitValue}
 */

const get = (unitKey: string) =>
  (unitContext => unitContext[unitKey]: (unitContext: unitContext) => unitValue)

export default getWithContext
