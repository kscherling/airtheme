import factoryFor from './factoryFor'
import unitSchema from './schema'

describe('#createFactoryForUnit', () => {
  it('returns unit instance with defaults', () => {
    const factory = factoryFor(unitSchema)
    const instance = factory()

    expect(instance).toEqual({
      __schemaname: 'Unit',
      __typename: '',
      name: '',
      ordinal: 0,
      value: ''
    })
  })

  it('sanitizes input', () => {
    const factory = factoryFor(unitSchema)
    const instance = factory({
      __typename: 'Factor'
    })

    expect(instance).toEqual({
      __schemaname: 'Unit',
      __typename: 'Factor',
      name: '',
      ordinal: 0,
      value: ''
    })
  })
})
