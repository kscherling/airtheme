import createStore from '../store/index'
import {
  updateBaseFontSize,
  updateBaseLineHeight,
  updateBaseSpacing,
  updateThemeId,
  updateThemeName
} from '../action/theme'
import { updateTheme } from '../action/root'
import baseState from '../test/baseState'
import updatedState from '../test/updatedState'

it('initial state (baseState)', () => {
  const store = createStore()

  const state = store.getState()

  expect(state).toEqual(baseState)
})

it('`updateTheme` updates theme', () => {
  const store = createStore()

  store.dispatch(updateTheme(updatedState.theme))
  const state = store.getState()

  expect(state).toEqual(updatedState)
})
