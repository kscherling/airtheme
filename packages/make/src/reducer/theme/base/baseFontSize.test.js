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
    content: { name: 'baseFontSize', ordinal: null, __typename: 'px', value: 16 },
    view: 'px',
    viewable: ['px'],
    reference: null,
    __typename: 'baseFontSize',
    unit: 'px'
  })

  store.dispatch(updateBaseFontSize(null, { value: 14 }))
  const updatedState = store.getState()

  expect(updatedState.theme.base.baseFontSize).toEqual({
    content: { name: 'baseFontSize', __typename: 'px', ordinal: null, value: 14 },
    __typename: 'baseFontSize',
    reference: null,
    unit: 'px',
    view: 'px',
    viewable: ['px']
  })
})
