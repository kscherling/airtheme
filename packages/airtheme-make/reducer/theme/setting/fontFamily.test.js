import createStore from '../../../store/index'
import {
  addFontFamily,
  updateFontFamily,
  removeFontFamily
} from '../../../action/theme/setting/fontFamily'
import { updateTheme } from '../../../action/root'
import baseState, { withBaseState } from '../../../test/baseState'
import { attribute, unit } from '@airtheme/type'
import { withBaseSetting } from '../../../test/baseSetting'

let store

beforeEach(() => {
  store = createStore()
  store.dispatch(updateTheme(baseState.theme))
})

it('`addFontFamily` adds a font family', () => {
  const value = 'Roboto'
  const key = 'fontFace'
  const ordinal = 1
  const initialFontFamily = unit.reference({ key, value, ordinal })
  const updatedState = withBaseState({
    setting: withBaseSetting({
      fontFamily: attribute.fontFamily({ content: [initialFontFamily] })
    })
  })

  store.dispatch(addFontFamily(value, key, ordinal))
  const state = store.getState()

  expect(state).toEqual(updatedState)
})

it('`removeFontFamily` removes font family', () => {
  const reference = { key: 'fontFace', value: 'Roboto', ordinal: 1 }
  const fontFamilyA = unit.reference(reference)
  const fontFamilyB = unit.reference(reference)
  const initialState = withBaseState({
    setting: withBaseSetting({
      fontFamily: attribute.fontFamily({ content: [fontFamilyA, fontFamilyB] })
    })
  })
  const updatedState = withBaseState({
    setting: withBaseSetting({
      fontFamily: attribute.fontFamily({ content: [fontFamilyB] })
    })
  })

  store.dispatch(updateTheme(initialState.theme))
  store.dispatch(removeFontFamily(fontFamilyA))
  const state = store.getState()

  expect(state).toEqual(updatedState)
})

it('`updateFontFamily` update font family', () => {
  const initialFactor = { key: 'fontFace', value: 'Roboto', ordinal: 1 }
  const initialFontFamilyA = unit.reference(initialFactor)
  const initialFontFamilyB = unit.reference(initialFactor)
  const initialState = withBaseState({
    setting: withBaseSetting({
      fontFamily: attribute.fontFamily({
        content: [initialFontFamilyA, initialFontFamilyB]
      })
    })
  })
  const updatedFactor = { key: 'fontFace', value: 'Open Sans', ordinal: 2 }
  const updatedFontFamily = unit.reference(updatedFactor)
  const updatedState = withBaseState({
    setting: withBaseSetting({
      fontFamily: attribute.fontFamily({
        content: [updatedFontFamily, initialFontFamilyB]
      })
    })
  })

  store.dispatch(updateTheme(initialState.theme))
  store.dispatch(
    updateFontFamily(
      initialFontFamilyA,
      updatedFactor.value,
      updatedFactor.key,
      updatedFactor.ordinal
    )
  )
  const state = store.getState()

  expect(state).toEqual(updatedState)
})
