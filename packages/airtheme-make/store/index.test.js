import createStore from './index'
import {
  updateTheme,
  updateBaseFontSize,
  updateBaseLineHeight,
  updateBaseSpacing
} from '../action/theme'
import { theme, attribute } from '@airtheme/airtheme-type'

const defaultTheme = { theme: theme.basic() }
const withDefaultTheme = ({ ...args }) => ({
  theme: { ...defaultTheme.theme, ...args }
})

it('initial state', () => {
  const store = createStore()
  const initialState = {
    theme: {
      name: ''
    }
  }

  const state = store.getState()

  expect(state).toEqual(initialState)
})

// it('`updateTheme` updates theme', () => {
//   const store = createStore()
//   const updatedState = defaultTheme
//
//   store.dispatch(updateTheme(theme.basic()))
//   const state = store.getState()
//
//   expect(state).toEqual(updatedState)
// })
//
// it('`updateBaseFontSize` updates updates base font size', () => {
//   const store = createStore()
//   const updatedState = withDefaultTheme({ baseFontSize: 14 })
//
//   store.dispatch(updateTheme(theme.basic())) // Set initial to tested baseline
//   store.dispatch(updateBaseFontSize(14))
//   const state = store.getState()
//
//   expect(state).toEqual(updatedState)
// })
//
// it('`updateBaseLineHeight` updates base line height', () => {
//   const store = createStore()
//   const updatedState = withDefaultTheme({ baseLineHeight: 1.25 })
//
//   store.dispatch(updateTheme(theme.basic())) // Set initial to tested baseline
//   store.dispatch(updateBaseLineHeight(1.25))
//   const state = store.getState()
//
//   expect(state).toEqual(updatedState)
// })
//
// it('`updateBaseSpacing` updates base spacing', () => {
//   const store = createStore()
//   const updatedState = withDefaultTheme({ baseSpacing: 18 })
//
//   store.dispatch(updateTheme(theme.basic())) // Set initial to tested baseline
//   store.dispatch(updateBaseSpacing(18))
//   const state = store.getState()
//
//   expect(state).toEqual(updatedState)
// })
//
// it('`addSwatch` adds swatch', () => {
//   const store = createStore()
//   const updatedState = withDefaultTheme({
//     swatch: attribute.swatch({
//       content: [type.hexa('#000000, 1')]
//     })
//   })
//
//   store.dispatch(updateTheme(theme.basic())) // Set initial to tested baseline
//   store.dispatch(addSwatch('#000000'))
//   const state = store.getState()
//
//   expect(state).toEqual(updatedState)
// })
