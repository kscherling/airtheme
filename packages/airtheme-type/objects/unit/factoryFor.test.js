import factoryFor from './factoryFor'

describe('#createFactoryForUnit', () => {
  it('returns factory', () => {
    const schema = { type: null, value: null }
    const type = { type: 'type' }

    const factory = factoryFor(type, schema)
    const instance = factory({ value: 'value' })

    expect(instance).toEqual({
      type: 'type',
      value: 'value'
    })
  })

  it('sanitizes input', () => {
    const schema = { type: null, value: null }
    const type = { type: 'type' }

    const factory = factoryFor(type, schema)
    const instance = factory({ value: 'value', nope: true })

    expect(instance).toEqual({
      type: 'type',
      value: 'value'
    })
  })
})
