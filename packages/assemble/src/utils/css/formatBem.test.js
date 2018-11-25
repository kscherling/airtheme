import formatBem, { formatBemWithBase, formatBemWithSetting } from './formatBem'

test('with all bems', () => {
  expect(formatBem('block', 'element', 'modifier')).toEqual(
    'block__element_modifier'
  )
})

test('only block and element', () => {
  expect(formatBem('block', 'element', null)).toEqual('block__element')
})

test('without element', () => {
  expect(formatBem('block', null, 'modifier')).toEqual('block_modifier')
})

test('without block', () => {
  expect(formatBem(null, 'element', 'modifier')).toEqual('element_modifier')
})

describe('#formatBemWithBase', () => {
  test('curries block', () => {
    expect(formatBemWithBase('element', 'modifier')).toEqual(
      'base__element_modifier'
    )
  })
})

describe('#formatBemWithSetting', () => {
  test('curries block', () => {
    expect(formatBemWithSetting('element', 'modifier')).toEqual(
      'setting__element_modifier'
    )
  })
})
