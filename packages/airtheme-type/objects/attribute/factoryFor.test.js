import schema from './schema'
import createAttribute, { createAttributeFactory } from './factoryFor'

describe('#createAttribute', () => {
  it('returns base type', () => {
    const type = createAttribute()

    expect(type).toEqual(schema)
  })

  it('is idempotent', () => {
    const type = createAttribute()

    expect(type).toEqual(schema)
    expect(type).not.toBe(schema)
  })

  it('assigns allowed fields', () => {
    const type = createAttribute({
      display: 'factor',
      displays: ['factor', 'px', 'rem'],
      reference: 'baseFontSize',
      type: 'fontSize',
      unit: 'factor'
    })

    expect(type).toEqual({
      content: {},
      display: 'factor',
      displays: ['factor', 'px', 'rem'],
      reference: 'baseFontSize',
      type: 'fontSize',
      unit: 'factor'
    })
  })

  it('uses defaults for missing args', () => {
    const type = createAttribute({
      display: 'factor',
      displays: ['factor', 'px', 'rem'],
      reference: 'baseFontSize',
      type: 'fontSize',
      unit: 'factor'
    })

    expect(type).toEqual({
      content: {},
      display: 'factor',
      displays: ['factor', 'px', 'rem'],
      reference: 'baseFontSize',
      type: 'fontSize',
      unit: 'factor'
    })
  })

  it('sanitizes disallowed fields', () => {
    const type = createAttribute({ content: { nope: true }, foo: 'also no' })

    expect(type).toEqual({
      content: {},
      display: null,
      displays: [],
      reference: null,
      type: 'attribute',
      unit: null
    })
  })
})
