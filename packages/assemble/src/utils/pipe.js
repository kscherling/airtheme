// @flow

/**
 * The accumulated object values passed through the pipeableFns
 * similar in concept to an array reduce accumulator.
 */

type Accumulator = {}

/**
 * The data passed through the pipeableFn's as reference
 * The source of accumulated values
 */
type InitialData = {}

/**
 * Recursive function called so long as args array has length
 * @private
 */

type NextFn = (Accumulator, InitialData) => Accumulator | void

/**
 * Similar concept to a reducer fn, called recursively in a pipe
 * Aways returns the result of the nextFn arg called with accumulator and initialData
 *
 * @example
 * const pipeableFn = (nextFn, accumulator = {}, initialData) => {
 *   const output = {
 *     ...accumulator,
       foo: transform(accumulator.foo)
 *   }
 *
 *   return nextFn(output, initialData)
 * }
 */

export type PipeableFn = (
  nextFn: NextFn,
  accumulator: Accumulator,
  data: InitialData
) => Accumulator

/**
 * Pipe data through a list of reducer fn's and return an accumulated value
 *
 * @example
 *
 * const pipeline = pipe(
 *   pipeableA,
 *   pipeableB,
 *   pipeableC
 * )
 *
 * pipeline({ some: 'data' })
 */

const pipe = (...args: PipeableFn[]) => (data: InitialData) => {
  const nextFn: NextFn = (accumulator, data) => {
    const pipeableFn = args.shift()

    if (pipeableFn) {
      return pipeableFn(nextFn, accumulator, data)
    }

    return accumulator
  }

  return nextFn({}, data)
}

export default pipe
