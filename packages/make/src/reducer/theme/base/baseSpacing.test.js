import { attribute, unit } from '@airtheme/type'
import makeStore from '../../../store/index'
import { updateBaseSpacing } from '../../../action/theme/base/baseSpacing'

let store

beforeEach(() => {
  store = makeStore()
  store.dispatch(updateTheme(baseState.theme))
})

it('`updateBaseSpacing` update base font size', () => {
  const initialState = store.getState()

  expect(initialState.theme.base.baseSpacing).toEqual({
    content: { name: 'baseSpacing', ordinal: null, object: 'px', value: 16 },
    view: 'px',
    viewable: ['px'],
    reference: null,
    object: 'baseSpacing',
    unit: 'px'
  })

  store.dispatch(updateBaseSpacing({ value: 14 }))
  const updatedState = store.getState()

  expect(updatedState.theme.base.baseSpacing).toEqual({
    content: { name: 'baseSpacing', object: 'px', ordinal: null, value: 14 },
    object: 'baseSpacing',
    reference: null,
    unit: 'px',
    view: 'px',
    viewable: ['px']
  })
})
