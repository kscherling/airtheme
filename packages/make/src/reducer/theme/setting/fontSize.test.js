import makeStore from '../../../store/index'
import {
  addFontSize,
  updateFontSize,
  removeFontSize
} from '../../../action/theme/setting/fontSize'
import { updateTheme } from '../../../action/root'
import baseState, { withBaseState } from '../../../test/baseState'
import { attribute, unit } from '@airtheme/type'
import { withBaseSetting } from '../../../test/baseSetting'

let store

beforeEach(() => {
  store = makeStore()
  store.dispatch(updateTheme(baseState))
})

it('`addFontSize` adds a font size', () => {
  const value = 1
  const name = 'sm'
  const ordinal = 1
  const initialFontSize = unit.factor({ name, value, ordinal })
  const updatedState = withBaseState({
    setting: withBaseSetting({
      fontSize: attribute.fontSize({ content: [initialFontSize] })
    })
  })

  store.dispatch(addFontSize(value, name, ordinal))
  const state = store.getState()

  expect(state).toEqual(updatedState)
})

it('`removeFontSize` removes font size', () => {
  const factor = { name: 'sm', value: 1, ordinal: 1 }
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

it('`updateFontSize` update font size', () => {
  const initialFactor = { name: 'sm', value: 1, ordinal: 1 }
  const initialFontSizeA = unit.factor(initialFactor)
  const initialFontSizeB = unit.factor(initialFactor)
  const initialState = withBaseState({
    setting: withBaseSetting({
      fontSize: attribute.fontSize({
        content: [initialFontSizeA, initialFontSizeB]
      })
    })
  })
  const updatedFactor = { name: 'sm', value: 1.25, ordinal: 2 }
  const updatedFontSize = unit.factor(updatedFactor)
  const updatedState = withBaseState({
    setting: withBaseSetting({
      fontSize: attribute.fontSize({
        content: [updatedFontSize, initialFontSizeB]
      })
    })
  })

  store.dispatch(updateTheme(initialState.theme))
  store.dispatch(
    updateFontSize(
      initialFontSizeA,
      updatedFactor
    )
  )
  const state = store.getState()

  expect(state).toEqual(updatedState)
})
