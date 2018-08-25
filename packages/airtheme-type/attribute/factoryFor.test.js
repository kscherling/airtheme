import schema from './schema'
import factoryFor from './factoryFor'

const type = {
  content: [],
  display: 'factor',
  displays: ['factor', 'px', 'rem'],
  reference: 'baseFontSize',
  type: 'fontSize',
  unit: 'factor'
}

it('handles empty values', () => {
  const factory = factoryFor({}, schema)
  const instance = factory()

  expect(instance).toEqual(schema)
})

it('returns factory', () => {
  const factory = factoryFor(type, schema)
  const instance = factory()

  expect(instance).toEqual({
    content: [],
    display: 'factor',
    displays: ['factor', 'px', 'rem'],
    reference: 'baseFontSize',
    type: 'fontSize',
    unit: 'factor'
  })
})

it('initializes with content', () => {
  const factory = factoryFor(type, schema)
  const instance = factory({
    content: [{ some: 'stuff' }]
  })

  expect(instance).toEqual({
    content: [{ some: 'stuff' }],
    display: 'factor',
    displays: ['factor', 'px', 'rem'],
    reference: 'baseFontSize',
    type: 'fontSize',
    unit: 'factor'
  })
})
