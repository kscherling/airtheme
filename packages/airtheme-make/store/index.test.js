import createStore from './index'
import { updateTheme } from '../action/theme'
import { theme } from '@airtheme/airtheme-type'

it('initializes store with initial state', () => {
  const store = createStore()

  const state = store.getState()

  store.dispatch(updateTheme())

  const nextState = store.getState()

  expect(state).toEqual({ theme: {} })
  expect(nextState).toEqual({
    theme: {
      baseFontSize: 16,
      baseLineHeight: 1.15,
      baseSpacing: 16,
      id: null,
      name: 'Basic Airtheme',
      setting: {},
      swatch: [],
      type: 'airtheme',
      version: '0.1.0'
    }
  })
})
