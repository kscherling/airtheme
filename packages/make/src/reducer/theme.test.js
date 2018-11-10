import makeStore from '../store/index'
import {
  updateBaseFontSize,
  updateBaseLineHeight,
  updateBaseSpacing,
  updateThemeId,
  updateThemeName
} from '../action/theme'
import { updateTheme } from '../action/root'
import { theme } from '@airtheme/type'

let store

beforeEach(() => {
  store = makeStore()
})

it('`updateThemeName` update name', () => {
  const name = 'My Theme'
  const updatedState = theme.base({ name })

  store.dispatch(updateThemeName(name))
  const state = store.getState()

  expect(state).toEqual({ theme: updatedState })
})

it('`updateThemeId` updates id', () => {
  const id = '123456'
  const updatedState = theme.base({ id })

  store.dispatch(updateThemeId(id))
  const state = store.getState()

  expect(state).toEqual({ theme: updatedState })
})
