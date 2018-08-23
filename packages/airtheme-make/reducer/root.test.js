import createStore from '../store/index'
import {
  updateBaseFontSize,
  updateBaseLineHeight,
  updateBaseSpacing,
  updateThemeId,
  updateThemeName
} from '../action/theme'
import { updateTheme } from '../action/root'
import { theme, attribute } from '@airtheme/airtheme-type'
import baseState from '../test/baseState'
import updatedState from '../test/updatedState'

const withDefaultTheme = ({ ...args }) => ({
  theme: { ...updatedState.theme, ...args }
})

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
