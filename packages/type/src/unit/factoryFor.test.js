import factoryFor from './factoryFor'
import * as types from './types'

const { Factor } = types

describe('#createFactoryForUnit', () => {
  it('returns unit instance with defaults', () => {
    const factory = factoryFor(Factor)
    const instance = factory()

    expect(instance).toEqual({
      __schemaname: 'Unit',
      __typename: 'Factor',
      name: '',
      ordinal: 0,
      value: ''
    })
  })

  it('sanitizes input', () => {
    const factory = factoryFor()
    const instance = factory({
      name: 'md',
      ordinal: 1,
      value: '1.12'
    })

    expect(instance).toEqual({
      __schemaname: 'Unit',
      __typename: 'Factor',
      name: 'md',
      ordinal: 1,
      value: '1.12'
    })
  })
})
