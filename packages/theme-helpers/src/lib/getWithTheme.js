// @flow

import curry from './curry'
import compose from './compose'

import type {
  mapContext,
  props,
  unitKey,
  unitValue,
  unitContext
} from '../flow/types'

/**
 * Curried function returning a `unitValue` for given context, key, and props
 * @param mapContext
 * @param unitKey
 * @param props
 */

const getWithContext = curry(
  (mapContext: mapContext, unitKey: string, props: props) =>
    (get(unitKey)(connectContext(mapContext)(props)): unitValue)
)

/**
 *
 * @param mapContext
 * @param props
 * @returns {object}
 */

const connectContext = (mapContext: mapContext) =>
  (props => mapContext(props): (props: props) => unitContext)

/**
 * Description
 * @param unitKey
 * @param unitContext
 * @returns {unitContext}
 */

const get = (unitKey: string) => (unitContext: {}) =>
  (unitContext[unitKey]: unitValue)

export default getWithContext
