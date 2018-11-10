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
    __schemaname: 'Attribute',
    __typename: 'BaseLineHeight',
    content: {
      __schemaname: 'Unit',
      __typename: 'Factor',
      name: '',
      ordinal: 0,
      value: ''
    },
    reference: 'base.baseFontSize',
    unit: 'Factor',
    view: 'Factor',
    viewable: ['Factor', 'Px']
  })

  store.dispatch(updateBaseLineHeight(null, { value: 1.25 }))
  const updatedState = store.getState()

  expect(updatedState.theme.base.baseLineHeight).toEqual({
    __schemaname: 'Attribute',
    __typename: 'BaseLineHeight',
    content: {
      __schemaname: 'Unit',
      __typename: 'Factor',
      name: '',
      ordinal: 0,
      value: 1.25
    },
    reference: 'base.baseFontSize',
    unit: 'Factor',
    view: 'Factor',
    viewable: ['Factor', 'Px']
  })
})
