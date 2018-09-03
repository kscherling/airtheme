import global from './global'
import pipe, { output } from '../utils/pipe'
import { theme } from '@airtheme/type'

const basicTheme = theme.base()

test('builds global values', () => {
  const result = pipe(basicTheme)(global, output)

  expect(result).toEqual({
    baseFontSize: { baseFontSize: '16px' },
    baseLineHeight: { baseLineHeight: '18.4px' },
    baseSpacing: { baseSpacing: '16px' }
  })

  expect(true).toEqual(true)
})
