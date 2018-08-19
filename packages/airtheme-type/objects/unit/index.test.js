import types from './index'

describe('#px', () => {})

it('creates `factor`', () => {
  const result = types.factor({ value: 1 })

  expect(result).toEqual({ type: 'factor', value: 1, ordinal: null, key: null })
})

it('creates `hex`', () => {
  const result = types.hex({ value: '#000000' })

  expect(result).toEqual({
    type: 'hex',
    value: '#000000',
    ordinal: null,
    key: null
  })
})

it('creates `hexa`', () => {
  const result = types.hexa({ value: '#000000,0.5' })

  expect(result).toEqual({
    type: 'hexa',
    value: '#000000,0.5',
    ordinal: null,
    key: null
  })
})

it('creates `px`', () => {
  const result = types.px({ value: 1 })

  expect(result).toEqual({ type: 'px', value: 1, ordinal: null, key: null })
})

it('creates `reference`', () => {
  const result = types.reference({ value: 'swatches.black' })

  expect(result).toEqual({
    type: 'reference',
    value: 'swatches.black',
    ordinal: null,
    key: null
  })
})

it('creates `rem`', () => {
  const result = types.rem({ value: 1 })

  expect(result).toEqual({ type: 'rem', value: 1, ordinal: null, key: null })
})

it('creates `rgb`', () => {
  const result = types.rgb({ value: '0,0,0' })

  expect(result).toEqual({
    type: 'rgb',
    value: '0,0,0',
    ordinal: null,
    key: null
  })
})

it('creates `rgba`', () => {
  const result = types.rgba({ value: '0,0,0,0' })

  expect(result).toEqual({
    type: 'rgba',
    value: '0,0,0,0',
    ordinal: null,
    key: null
  })
})
