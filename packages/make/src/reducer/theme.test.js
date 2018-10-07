import makeStore from '../store/index'
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
  store = makeStore()
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
