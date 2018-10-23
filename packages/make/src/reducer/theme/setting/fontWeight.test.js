import makeStore from '../../../store/index'
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
  store = makeStore()
  store.dispatch(updateTheme(baseState))
})

it('`addFontWeight` adds a font size', () => {
  const value = '300'
  const name = 'lt'
  const ordinal = 1
  const initialFontWeight = unit.string({ name, value, ordinal })
  const updatedState = withBaseState({
    setting: withBaseSetting({
      fontWeight: attribute.fontWeight({ content: [initialFontWeight] })
    })
  })

  store.dispatch(addFontWeight(value, name, ordinal))
  const state = store.getState()

  expect(state).toEqual(updatedState)
})

it('`removeFontWeight` removes font size', () => {
  const string = { name: 'lt', value: '300', ordinal: 1 }
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
  const initialFactor = { name: 'lt', value: '300', ordinal: 1 }
  const initialFontWeightA = unit.string(initialFactor)
  const initialFontWeightB = unit.string(initialFactor)
  const initialState = withBaseState({
    setting: withBaseSetting({
      fontWeight: attribute.fontWeight({
        content: [initialFontWeightA, initialFontWeightB]
      })
    })
  })
  const updatedFactor = { name: 'lt', value: '500', ordinal: 2 }
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
      updatedFactor
    )
  )
  const state = store.getState()

  expect(state).toEqual(updatedState)
})
