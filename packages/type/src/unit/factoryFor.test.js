import factoryFor from './factoryFor'

describe('#createFactoryForUnit', () => {
  it('returns factory', () => {
    const schema = { object: null, value: null }
    const object = { object: 'object' }

    const factory = factoryFor(object, schema)
    const instance = factory({ value: 'value' })

    expect(instance).toEqual({
      object: 'object',
      value: 'value'
    })
  })

  it('sanitizes input', () => {
    const schema = { object: null, value: null }
    const object = { object: 'object' }

    const factory = factoryFor(object, schema)
    const instance = factory({ value: 'value', nope: true })

    expect(instance).toEqual({
      object: 'object',
      value: 'value'
    })
  })
})
