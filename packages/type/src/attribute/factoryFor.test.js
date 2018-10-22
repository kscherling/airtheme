import schema from './schema'
import factoryFor from './factoryFor'

it('returns attribute instance with defaults', () => {
  const factory = factoryFor(schema)
  const instance = factory()

  expect(instance).toEqual({
    __schemaname: 'Attribute',
    __typename: '',
    content: [],
    reference: '',
    unit: '',
    view: '',
    viewable: []
  })
})

it('initializes with content', () => {
  const factory = factoryFor(schema)
  const instance = factory({
    __typename: 'baseFontSize',
    content: {},
    view: 'factor',
    viewable: ['px'],
    reference: null,
    unit: 'px'
  })

  expect(instance).toEqual({
    __schemaname: 'Attribute',
    __typename: 'baseFontSize',
    content: {},
    reference: null,
    unit: 'px',
    view: 'factor',
    viewable: ['px']
  })
})
