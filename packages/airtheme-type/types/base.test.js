import createType, { createTypeFactoryFor } from './base'

describe('#createType', () => {
  it('returns base type', () => {
    const type = createType()

    expect(type).toEqual({
      content: {},
      display: null,
      type: 'base',
      options: [],
      reference: null,
      unit: null
    })
  })

  it('returns new type type', () => {
    const type = createType({
      type: 'fontSize',
      display: 'factor',
      reference: 'baseFontSize',
      options: ['factor', 'px', 'rem'],
      unit: 'factor'
    })

    expect(type).toEqual({
      content: {},
      type: 'fontSize',
      display: 'factor',
      reference: 'baseFontSize',
      options: ['factor', 'px', 'rem'],
      unit: 'factor'
    })
  })

  it('does not set content', () => {
    const type = createType({ content: { nope: true } })

    expect(type).toEqual({
      content: {},
      display: null,
      type: 'base',
      options: [],
      reference: null,
      unit: null
    })
  })
})
