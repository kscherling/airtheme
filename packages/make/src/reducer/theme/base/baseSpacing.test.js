import { attribute, unit } from '@airtheme/type'
import makeStore from '../../../store/index'
import { updateBaseSpacing } from '../../../action/theme/base/baseSpacing'

let store

beforeEach(() => {
  store = makeStore()
})

it('`updateBaseSpacing` update base font size', () => {
  const initialState = store.getState()

  expect(initialState.theme.base.baseSpacing).toEqual({
    __schemaname: 'Attribute',
    __typename: 'BaseSpacing',
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

  store.dispatch(updateBaseSpacing(null, { value: 14 }))
  const updatedState = store.getState()

  expect(updatedState.theme.base.baseSpacing).toEqual({
    __schemaname: 'Attribute',
    __typename: 'BaseSpacing',
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
