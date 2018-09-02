import { attribute, unit } from '@airtheme/type'
import makeStore from '../../../store/index'
import { updateBaseFontSize } from '../../../action/theme/base/baseFontSize'

let store

beforeEach(() => {
  store = makeStore()
  store.dispatch(updateTheme(baseState.theme))
})

it('`updateBaseFontSize` update base font size', () => {
  const initialState = store.getState()

  expect(initialState.theme.base.baseFontSize).toEqual({
    content: { name: 'baseFontSize', ordinal: null, object: 'px', value: 16 },
    view: 'px',
    viewable: ['px'],
    reference: null,
    object: 'baseFontSize',
    unit: 'px'
  })

  store.dispatch(updateBaseFontSize({ value: 14 }))
  const updatedState = store.getState()

  expect(updatedState.theme.base.baseFontSize).toEqual({
    content: { name: 'baseFontSize', object: 'px', ordinal: null, value: 14 },
    object: 'baseFontSize',
    reference: null,
    unit: 'px',
    view: 'px',
    viewable: ['px']
  })
})
