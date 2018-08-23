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

const defaultTheme = { theme: theme.basic() }
const withDefaultTheme = ({ ...args }) => ({
  theme: { ...defaultTheme.theme, ...args }
})

let store

beforeEach(() => {
  store = createStore()
  store.dispatch(updateTheme(theme.basic()))
})

it('`updateThemeName` update name', () => {
  const updatedState = withDefaultTheme({ name: 'My Theme' })

  store.dispatch(updateThemeName('My Theme'))
  const state = store.getState()

  expect(state).toEqual(updatedState)
})

// it('`updateThemeId` updates id', () => {
//   const store = createStore()
//   const updatedState = withDefaultTheme({ id: 'ID1234' })
//
//   store.dispatch(updateThemeId('ID1234'))
//   const state = store.getState()
//
//   expect(state).toEqual(updatedState)
// })
//
// it('`updateBaseFontSize` updates updates base font size', () => {
//   const updatedState = withDefaultTheme({ baseFontSize: 14 })
//
//   store.dispatch(updateBaseFontSize(14))
//   const state = store.getState()
//
//   expect(state).toEqual(updatedState)
// })
//
// it('`updateBaseLineHeight` updates base line height', () => {
//   const updatedState = withDefaultTheme({ baseLineHeight: 1.25 })
//
//   store.dispatch(updateBaseLineHeight(1.25))
//   const state = store.getState()
//
//   expect(state).toEqual(updatedState)
// })
//
// it('`updateBaseSpacing` updates base spacing', () => {
//   const updatedState = withDefaultTheme({ baseSpacing: 18 })
//
//   store.dispatch(updateBaseSpacing(18))
//   const state = store.getState()
//
//   expect(state).toEqual(updatedState)
// })
