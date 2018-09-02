import schema from './schema'
import factoryFor from './factoryFor'

const object = {
  content: [],
  view: 'factor',
  viewable: ['factor', 'px', 'rem'],
  reference: 'baseFontSize',
  object: 'fontSize',
  unit: 'factor'
}

it('handles empty values', () => {
  const factory = factoryFor({}, schema)
  const instance = factory()

  expect(instance).toEqual(schema)
})

it('returns factory', () => {
  const factory = factoryFor(object, schema)
  const instance = factory()

  expect(instance).toEqual({
    content: [],
    view: 'factor',
    viewable: ['factor', 'px', 'rem'],
    reference: 'baseFontSize',
    object: 'fontSize',
    unit: 'factor'
  })
})

it('initializes with content', () => {
  const factory = factoryFor(object, schema)
  const instance = factory({
    content: [{ some: 'stuff' }]
  })

  expect(instance).toEqual({
    content: [{ some: 'stuff' }],
    view: 'factor',
    viewable: ['factor', 'px', 'rem'],
    reference: 'baseFontSize',
    object: 'fontSize',
    unit: 'factor'
  })
})
