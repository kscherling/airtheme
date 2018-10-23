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
    content: { name: 'baseSpacing', ordinal: null, __typename: 'px', value: 16 },
    view: 'px',
    viewable: ['px'],
    reference: null,
    __typename: 'baseSpacing',
    unit: 'px'
  })

  store.dispatch(updateBaseSpacing(null, { value: 14 }))
  const updatedState = store.getState()

  expect(updatedState.theme.base.baseSpacing).toEqual({
    content: { name: 'baseSpacing', __typename: 'px', ordinal: null, value: 14 },
    __typename: 'baseSpacing',
    reference: null,
    unit: 'px',
    view: 'px',
    viewable: ['px']
  })
})
