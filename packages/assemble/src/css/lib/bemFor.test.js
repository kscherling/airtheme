import bemFor, { bemForBase, bemForSetting } from './bemFor'

test('with all bems', () => {
  expect(bemFor('block', 'element', 'modifier')).toEqual(
    'block__element_modifier'
  )
})

test('only block and element', () => {
  expect(bemFor('block', 'element', null)).toEqual('block__element')
})

test('without element', () => {
  expect(bemFor('block', null, 'modifier')).toEqual('block_modifier')
})

test('without block', () => {
  expect(bemFor(null, 'element', 'modifier')).toEqual('element_modifier')
})

describe('#bemForBase', () => {
  test('curries block', () => {
    expect(bemForBase('element', 'modifier')).toEqual('element_modifier')
  })
})

describe('#bemForSetting', () => {
  test('curries block', () => {
    expect(bemForSetting('element', 'modifier')).toEqual('element_modifier')
  })
})
