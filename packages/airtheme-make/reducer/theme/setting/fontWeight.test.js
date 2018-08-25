import createStore from '../../../store/index'
import {
  addFontWeight,
  updateFontWeight,
  removeFontWeight
} from '../../../action/theme/setting/fontWeight'
import { updateTheme } from '../../../action/root'
import baseState, { withBaseState } from '../../../test/baseState'
import { attribute, unit } from '@airtheme/type'
import { withBaseSetting } from '../../../test/baseSetting'

let store

beforeEach(() => {
  store = createStore()
  store.dispatch(updateTheme(baseState.theme))
})

it('`addFontWeight` adds a font size', () => {
  const value = '300'
  const key = null
  const ordinal = 1
  const initialFontWeight = unit.string({ key, value, ordinal })
  const updatedState = withBaseState({
    setting: withBaseSetting({
      fontWeight: attribute.fontWeight({ content: [initialFontWeight] })
    })
  })

  store.dispatch(addFontWeight(value, key, ordinal))
  const state = store.getState()

  expect(state).toEqual(updatedState)
})

it('`removeFontWeight` removes font size', () => {
  const string = { key: null, value: '300', ordinal: 1 }
  const fontWeightA = unit.string(string)
  const fontWeightB = unit.string(string)
  const initialState = withBaseState({
    setting: withBaseSetting({
      fontWeight: attribute.fontWeight({ content: [fontWeightA, fontWeightB] })
    })
  })
  const updatedState = withBaseState({
    setting: withBaseSetting({
      fontWeight: attribute.fontWeight({ content: [fontWeightB] })
    })
  })

  store.dispatch(updateTheme(initialState.theme))
  store.dispatch(removeFontWeight(fontWeightA))
  const state = store.getState()

  expect(state).toEqual(updatedState)
})

it('`updateFontWeight` update font size', () => {
  const initialFactor = { key: null, value: '300', ordinal: 1 }
  const initialFontWeightA = unit.string(initialFactor)
  const initialFontWeightB = unit.string(initialFactor)
  const initialState = withBaseState({
    setting: withBaseSetting({
      fontWeight: attribute.fontWeight({
        content: [initialFontWeightA, initialFontWeightB]
      })
    })
  })
  const updatedFactor = { key: null, value: '500', ordinal: 2 }
  const updatedFontWeight = unit.string(updatedFactor)
  const updatedState = withBaseState({
    setting: withBaseSetting({
      fontWeight: attribute.fontWeight({
        content: [updatedFontWeight, initialFontWeightB]
      })
    })
  })

  store.dispatch(updateTheme(initialState.theme))
  store.dispatch(
    updateFontWeight(
      initialFontWeightA,
      updatedFactor.value,
      updatedFactor.key,
      updatedFactor.ordinal
    )
  )
  const state = store.getState()

  expect(state).toEqual(updatedState)
})
