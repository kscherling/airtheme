import {
  formatCssVariableWithBase,
  formatCssVariableWithSetting
} from './formatCss'

test('returns css var with setting block', () => {
  expect(formatCssVariableWithSetting('element', 'modifier')).toEqual(
    '--setting__element_modifier'
  )
})

test('returns css var with base block', () => {
  expect(formatCssVariableWithBase('element', 'modifier')).toEqual(
    '--base__element_modifier'
  )
})
