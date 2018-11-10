import makeStore from '../store/index'
import {
  updateBaseFontSize,
  updateBaseLineHeight,
  updateBaseSpacing,
  updateThemeId,
  updateThemeName
} from '../action/theme'
import { updateTheme } from '../action/root'
import updatedState from '../test/updatedState'
import { theme } from '@airtheme/type'

it('initial state', () => {
  const store = makeStore()
  const state = store.getState()

  expect(state).toEqual({ theme: theme.base() })
})

it('`updateTheme` updates theme', () => {
  const store = makeStore()

  store.dispatch(updateTheme(updatedState))
  const state = store.getState()

  expect(state).toEqual({ theme: updatedState })
})
