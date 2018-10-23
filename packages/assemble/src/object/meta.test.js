import meta from './meta'
import pipe, { output } from '../utils/pipe'
import basicTheme from '../test/theme'
import { VERSION } from '@airtheme/core'

test('builds meta values', () => {
  const result = pipe(basicTheme)(meta, output)

  expect(typeof result.id).toBe('string')
  expect(result.name).toEqual('')
  expect(result.version).toEqual(VERSION)

  expect(true).toEqual(true)
})
