import {
  formatScssVariableWithBase,
  formatScssVariableWithSetting
} from './formatScss'

test('returns css var with setting block', () => {
  expect(formatScssVariableWithSetting('element', 'modifier')).toEqual(
    '$setting__element_modifier'
  )
})

test('returns css var with base block', () => {
  expect(formatScssVariableWithBase('element', 'modifier')).toEqual(
    '$base__element_modifier'
  )
})
