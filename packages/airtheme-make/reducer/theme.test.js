import createStore from '../store/index'
import {
  updateBaseFontSize,
  updateBaseLineHeight,
  updateBaseSpacing,
  updateThemeId,
  updateThemeName
} from '../action/theme'
import { updateTheme } from '../action/root'
import baseState, { withBaseState } from '../test/baseState'

let store

beforeEach(() => {
  store = createStore()
  store.dispatch(updateTheme(baseState.theme))
})

it('`updateThemeName` update name', () => {
  const name = 'My Theme'
  const updatedState = withBaseState({ name })

  store.dispatch(updateThemeName(name))
  const state = store.getState()

  expect(state).toEqual(updatedState)
})

it('`updateThemeId` updates id', () => {
  const id = '123456'
  const updatedState = withBaseState({ id })

  store.dispatch(updateThemeId(id))
  const state = store.getState()

  expect(state).toEqual(updatedState)
})

it('`updateBaseFontSize` updates updates base font size', () => {
  const baseFontSize = 16
  const updatedState = withBaseState({ baseFontSize })

  store.dispatch(updateBaseFontSize(baseFontSize))
  const state = store.getState()

  expect(state).toEqual(updatedState)
})

it('`updateBaseLineHeight` updates base line height', () => {
  const baseLineHeight = 16
  const updatedState = withBaseState({ baseLineHeight })

  store.dispatch(updateBaseLineHeight(baseLineHeight))
  const state = store.getState()

  expect(state).toEqual(updatedState)
})

it('`updateBaseSpacing` updates base spacing', () => {
  const baseSpacing = 16
  const updatedState = withBaseState({ baseSpacing })

  store.dispatch(updateBaseSpacing(baseSpacing))
  const state = store.getState()

  expect(state).toEqual(updatedState)
})
