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
 * Curried get `unitValue` for given `mapContextFn`, `unitKey`, and `props`
 * @param {mapContextFn}
 * @param {unitKey}
 * @param {props}
 */

const getWithContext = curry(
  (mapContextFn: mapContextFn, unitKey: string, props: props) =>
    (get(unitKey)(connectContext(mapContextFn)(props)): unitValue)
)

/**
 * Curried get `unitContext` for given `mapContextFn` and `props`.
 * @param {mapContextFn}
 * @param {props}
 * @returns {unitContext}
 */

const connectContext = (mapContextFn: mapContextFn) =>
  (props => mapContextFn(props): (props: props) => unitContext)

/**
 * Curried get `unitValue` for given `unitKey` and `unitContext`.
 * @param {unitKey}
 * @param {unitContext}
 * @returns {unitValue}
 */

const get = (unitKey: string) =>
  (unitContext => unitContext[unitKey]: (unitContext: unitContext) => unitValue)

export default getWithContext
