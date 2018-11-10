import { attribute, unit } from '@airtheme/type'
import makeStore from '../../../store/index'
import { updateBaseFontSize } from '../../../action/theme/base/baseFontSize'

let store

beforeEach(() => {
  store = makeStore()
})

it('`updateBaseFontSize` update base font size', () => {
  const initialState = store.getState()

  expect(initialState.theme.base.baseFontSize).toEqual({
    __schemaname: 'Attribute',
    __typename: 'BaseFontSize',
    content: {
      __schemaname: 'Unit',
      __typename: 'Px',
      name: '',
      ordinal: 0,
      value: ''
    },
    reference: null,
    unit: 'Px',
    view: 'Px',
    viewable: ['Px']
  })

  store.dispatch(updateBaseFontSize(null, { value: 14 }))
  const updatedState = store.getState()

  expect(updatedState.theme.base.baseFontSize).toEqual({
    __schemaname: 'Attribute',
    __typename: 'BaseFontSize',
    content: {
      __schemaname: 'Unit',
      __typename: 'Px',
      name: '',
      ordinal: 0,
      value: 14
    },
    reference: null,
    unit: 'Px',
    view: 'Px',
    viewable: ['Px']
  })
})
