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
})
