import createType, { createTypeFactoryFor } from './base'

describe('#createType', () => {
  it('returns base type', () => {
    const type = createType()

    expect(type).toEqual({
      content: {},
      display: null,
      type: 'air-base',
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

  // it('does not set value', () => {
  //   const type = createType({ type: 'px', value: 'theme' })
  //
  //   expect(type).toEqual({
  //     type: 'px',
  //     value: null
  //   })
  // })
})
//
// describe('#createTypeFactoryFor', () => {
//   it('returns base type', () => {
//     const type = createType({ type: 'px' })
//     const typeFactory = createTypeFactoryFor(type)
//     const typeOfType = typeFactory({ value: 16 })
//
//     expect(typeOfType).toEqual({
//       type: 'px',
//       value: 16
//     })
//   })
// })
