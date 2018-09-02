import globals from './globals'
import pipe, { output } from '../utils/pipe'
import { theme } from '@airtheme/type'

const basicTheme = theme.base()

test('builds global values', () => {
  const result = pipe(basicTheme)(globals, output)

  expect(result).toEqual({
    baseSpacing: 16
  })
})
