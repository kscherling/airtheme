import createFontSize from './factory'

it('returns fontSize attribute', () => {
  const type = createFontSize()

  expect(type).toEqual({
    content: {},
    display: 'factor',
    displays: ['factor', 'px', 'rem'],
    reference: 'baseFontSize',
    type: 'fontSize',
    unit: 'factor'
  })
})

it('does NOT assign args', () => {
  const type = createFontSize({ content: {}, nope: true })

  expect(type).toEqual({
    content: {},
    display: 'factor',
    displays: ['factor', 'px', 'rem'],
    reference: 'baseFontSize',
    type: 'fontSize',
    unit: 'factor'
  })
})
