import attributes from './index'

describe('#px', () => {})

it('creates `factor`', () => {
  const result = attributes.fontSize()

  expect(result).toEqual({
    content: {},
    display: 'factor',
    displays: ['factor', 'px', 'rem'],
    reference: 'baseFontSize',
    type: 'fontSize',
    unit: 'factor'
  })
})
