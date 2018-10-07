import { attribute, unit } from '@airtheme/type'
import makeStore from '../../../store/index'
import { updateBaseLineHeight } from '../../../action/theme/base/baseLineHeight'

let store

beforeEach(() => {
  store = makeStore()
})

it('`updateBaseLineHeight` update base font size', () => {
  const initialState = store.getState()

  expect(initialState.theme.base.baseLineHeight).toEqual({
    content: {
      name: 'baseLineHeight',
      object: 'factor',
      ordinal: null,
      value: 1.15
    },
    object: 'baseLineHeight',
    reference: 'baseFontSize',
    unit: 'factor',
    view: 'factor',
    viewable: ['factor', 'px']
  })

  store.dispatch(updateBaseLineHeight({ value: 1.25 }))
  const updatedState = store.getState()

  expect(updatedState.theme.base.baseLineHeight).toEqual({
    content: {
      name: 'baseLineHeight',
      object: 'factor',
      ordinal: null,
      value: 1.25 // changed
    },
    object: 'baseLineHeight',
    reference: 'baseFontSize',
    unit: 'factor',
    view: 'factor',
    viewable: ['factor', 'px']
  })
})
