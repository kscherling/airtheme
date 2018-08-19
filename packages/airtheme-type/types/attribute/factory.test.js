import createType, { createTypeFactoryFor } from './base'

describe('#createType', () => {
  it('returns base type', () => {
    const type = createType()

    expect(type).toEqual({
      content: {},
      display: null,
      options: [],
      reference: null,
      type: 'attribute',
      unit: null
    })
  })

  it('returns new type type', () => {
    const type = createType({
      display: 'factor',
      options: ['factor', 'px', 'rem'],
      reference: 'baseFontSize',
      type: 'fontSize',
      unit: 'factor'
    })

    expect(type).toEqual({
      content: {},
      display: 'factor',
      options: ['factor', 'px', 'rem'],
      reference: 'baseFontSize',
      type: 'fontSize',
      unit: 'factor'
    })
  })

  it('does not set content', () => {
    const type = createType({ content: { nope: true } })

    expect(type).toEqual({
      content: {},
      display: null,
      options: [],
      reference: null,
      type: 'attribute',
      unit: null
    })
  })
})
