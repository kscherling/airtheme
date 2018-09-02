import root from './index'
import attribute from '../attribute'
import unit from '../unit'

it('creates `setting`', () => {
  const result = root.base()

  expect(result).toEqual({
    type: 'root',
    baseFontSize: {
      content: [],
      reference: null,
      type: 'baseFontSize',
      unit: 'px',
      view: 'px',
      viewable: ['px']
    },
    baseLineHeight: {
      content: [],
      reference: 'baseFontSize',
      type: 'baseLineHeight',
      unit: 'px',
      view: 'px',
      viewable: ['factor', 'px']
    },
    baseSpacing: {
      content: [],
      reference: null,
      type: 'baseSpacing',
      unit: 'px',
      view: 'px',
      viewable: ['px']
    }
  })
})

it('can initialize with custom `attribute`', () => {
  const result = root.base({
    baseFontSize: attribute.baseFontSize({
      content: { some: 'data' }
    })
  })

  expect(result).toEqual({
    type: 'root',
    baseFontSize: {
      content: { some: 'data' },
      reference: null,
      type: 'baseFontSize',
      unit: 'px',
      view: 'px',
      viewable: ['px']
    },
    baseLineHeight: {
      content: [],
      reference: 'baseFontSize',
      type: 'baseLineHeight',
      unit: 'px',
      view: 'px',
      viewable: ['factor', 'px']
    },
    baseSpacing: {
      content: [],
      reference: null,
      type: 'baseSpacing',
      unit: 'px',
      view: 'px',
      viewable: ['px']
    }
  })
})
