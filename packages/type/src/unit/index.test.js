import types from './index'

describe('#px', () => {})

it('creates `factor`', () => {
  const result = types.factor({ name: 'md', value: 1 })

  expect(result).toEqual({
    __schemaname: 'Unit',
    __typename: 'Factor',
    name: 'md',
    ordinal: 0,
    value: 1
  })
})

it('creates `hex`', () => {
  const result = types.hex({ name: 'black', value: '#000000' })

  expect(result).toEqual({
    __schemaname: 'Unit',
    __typename: 'Hex',
    name: 'black',
    ordinal: 0,
    value: '#000000'
  })
})

it('creates `hexa`', () => {
  const result = types.hexa({ name: 'md', value: '#000000ff' })

  expect(result).toEqual({
    __schemaname: 'Unit',
    __typename: 'Hexa',
    name: 'md',
    ordinal: 0,
    value: '#000000ff'
  })
})

it('creates `px`', () => {
  const result = types.px({ name: 'md', value: 1 })

  expect(result).toEqual({
    __schemaname: 'Unit',
    __typename: 'Px',
    name: 'md',
    ordinal: 0,
    value: 1
  })
})

it('creates `reference`', () => {
  const result = types.reference({ name: 'primary', value: 'swatches.black' })

  expect(result).toEqual({
    __schemaname: 'Unit',
    __typename: 'Reference',
    value: 'swatches.black',
    ordinal: 0,
    name: 'primary'
  })
})

it('creates `rem`', () => {
  const result = types.rem({ name: 'md', value: 1 })

  expect(result).toEqual({
    __schemaname: 'Unit',
    __typename: 'Rem',
    name: 'md',
    ordinal: 0,
    value: 1
  })
})

it('creates `rgb`', () => {
  const result = types.rgb({ name: 'black', value: '0,0,0' })

  expect(result).toEqual({
    __schemaname: 'Unit',
    __typename: 'Rgb',
    name: 'black',
    ordinal: 0,
    value: '0,0,0'
  })
})

it('creates `rgba`', () => {
  const result = types.rgba({ name: 'black', value: '0,0,0,0' })

  expect(result).toEqual({
    __schemaname: 'Unit',
    __typename: 'Rgba',
    name: 'black',
    ordinal: 0,
    value: '0,0,0,0'
  })
})
