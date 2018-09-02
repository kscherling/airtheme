import types from './index'

describe('#px', () => {})

it('creates `factor`', () => {
  const result = types.factor({ value: 1 })

  expect(result).toEqual({
    object: 'factor',
    value: 1,
    ordinal: null,
    name: null
  })
})

it('creates `hex`', () => {
  const result = types.hex({ value: '#000000' })

  expect(result).toEqual({
    object: 'hex',
    value: '#000000',
    ordinal: null,
    name: null
  })
})

it('creates `hexa`', () => {
  const result = types.hexa({ value: '#000000,0.5' })

  expect(result).toEqual({
    object: 'hexa',
    value: '#000000,0.5',
    ordinal: null,
    name: null
  })
})

it('creates `px`', () => {
  const result = types.px({ value: 1 })

  expect(result).toEqual({ object: 'px', value: 1, ordinal: null, name: null })
})

it('creates `name`', () => {
  const result = types.reference({ value: 'swatches.black' })

  expect(result).toEqual({
    object: 'reference',
    value: 'swatches.black',
    ordinal: null,
    name: null
  })
})

it('creates `rem`', () => {
  const result = types.rem({ value: 1 })

  expect(result).toEqual({ object: 'rem', value: 1, ordinal: null, name: null })
})

it('creates `rgb`', () => {
  const result = types.rgb({ value: '0,0,0' })

  expect(result).toEqual({
    object: 'rgb',
    value: '0,0,0',
    ordinal: null,
    name: null
  })
})

it('creates `rgba`', () => {
  const result = types.rgba({ value: '0,0,0,0' })

  expect(result).toEqual({
    object: 'rgba',
    value: '0,0,0,0',
    ordinal: null,
    name: null
  })
})
