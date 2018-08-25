import createStore from '../../../store/index'
import {
  addFontSize,
  updateFontSize,
  removeFontSize
} from '../../../action/theme/setting/fontSize'
import { updateTheme } from '../../../action/root'
import baseState, { withBaseState } from '../../../test/baseState'
import { attribute, unit } from '@airtheme/airtheme-type'
import { withBaseSetting } from '../../../test/baseSetting'

let store

beforeEach(() => {
  store = createStore()
  store.dispatch(updateTheme(baseState.theme))
})

it('`addFontSize` adds a font size', () => {
  const value = 1
  const key = 'basefontSize'
  const ordinal = 1
  const initialFontSize = unit.factor({ key, value, ordinal })
  const updatedState = withBaseState({
    setting: withBaseSetting({
      fontSize: attribute.fontSize({ content: [initialFontSize] })
    })
  })

  store.dispatch(addFontSize(value, key, ordinal))
  const state = store.getState()

  expect(state).toEqual(updatedState)
})

it('`removeFontSize` removes font size', () => {
  const factor = { key: 'baseFontSize', value: 1, ordinal: 1 }
  const fontSizeA = unit.factor(factor)
  const fontSizeB = unit.factor(factor)
  const initialState = withBaseState({
    setting: withBaseSetting({
      fontSize: attribute.fontSize({ content: [fontSizeA, fontSizeB] })
    })
  })
  const updatedState = withBaseState({
    setting: withBaseSetting({
      fontSize: attribute.fontSize({ content: [fontSizeB] })
    })
  })

  store.dispatch(updateTheme(initialState.theme))
  store.dispatch(removeFontSize(fontSizeA))
  const state = store.getState()

  expect(state).toEqual(updatedState)
})
//
// it('`updateColor` update color', () => {
//   const initialReference = { key: 'swatch', value: 'primary', ordinal: 1 }
//   const initialColorA = unit.fontSize(initialReference)
//   const initialColorB = unit.fontSize(initialReference)
//   const initialState = withBaseState({
//     setting: withBaseSetting({
//       color: attribute.color({ content: [initialColorA, initialColorB] })
//     })
//   })
//   const updatedReference = { key: 'swatch', value: 'secondary', ordinal: 2 }
//   const updatedColorA = unit.fontSize(updatedReference)
//   const updatedState = withBaseState({
//     setting: withBaseSetting({
//       color: attribute.color({ content: [updatedColorA, initialColorB] })
//     })
//   })
//
//   store.dispatch(updateTheme(initialState.theme))
//   store.dispatch(
//     updateColor(
//       initialColorA,
//       updatedReference.value,
//       updatedReference.key,
//       updatedReference.ordinal
//     )
//   )
//   const state = store.getState()
//
//   expect(state).toEqual(updatedState)
// })
