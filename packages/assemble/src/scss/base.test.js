import base from './base'
import basicTheme from '../test/theme'
import pipe from '../utils/pipe'

test('builds base values', () => {
  const result = pipe(base)(basicTheme)

  expect(result).toEqual({
    '$base__base-font-size': '16px',
    '$base__base-line-height': '18.4px',
    '$base__base-spacing': '16px'
  })
})
