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
      __typename: 'factor',
      ordinal: null,
      value: 1.15
    },
    __typename: 'baseLineHeight',
    reference: 'base.baseFontSize',
    unit: 'factor',
    view: 'factor',
    viewable: ['factor', 'px']
  })

  store.dispatch(updateBaseLineHeight(null, { value: 1.25 }))
  const updatedState = store.getState()

  expect(updatedState.theme.base.baseLineHeight).toEqual({
    content: {
      name: 'baseLineHeight',
      __typename: 'factor',
      ordinal: null,
      value: 1.25 // changed
    },
    __typename: 'baseLineHeight',
    reference: 'base.baseFontSize',
    unit: 'factor',
    view: 'factor',
    viewable: ['factor', 'px']
  })
})
