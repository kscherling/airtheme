/*

Example

pipeable functions must accept two params and return the called value of next with the output as the sole argument

const pipeable(next, input = {}) => {
  const output = reducer(input)

  return next(output)
}

const pipeline = pipe(
  pipeableA,
  pipeableB,
  pipeableC
)

pipeline({ some: 'data' })

*/

const pipe = theme => (...args) => {
  const next = (output, theme) => {
    const fn = args.shift()

    if (fn) {
      return fn(next, output, theme)
    }
  }

  return next({}, theme)
}

export const output = (_, output) => output

export default pipe
