import createStore from '../../../store/index'
import {
  addColor,
  updateColor,
  removeColor
} from '../../../action/theme/setting/color'
import { updateTheme } from '../../../action/root'
import baseState, { withBaseState } from '../../../test/baseState'
import { attribute, unit } from '@airtheme/airtheme-type'
import { withBaseSetting } from '../../../test/baseSetting'

let store

beforeEach(() => {
  store = createStore()
  store.dispatch(updateTheme(baseState.theme))
})

it('`addColor` adds a color', () => {
  const value = 'primary'
  const key = 'swatch'
  const ordinal = 1
  const initialColor = unit.reference({ key, value, ordinal })
  const updatedState = withBaseState({
    setting: withBaseSetting({
      color: attribute.color({ content: [initialColor] })
    })
  })

  store.dispatch(addColor(value, key, ordinal))
  const state = store.getState()

  expect(state).toEqual(updatedState)
})

it('`removeColor` removes color', () => {
  const reference = { key: 'swatch', value: 'primary', ordinal: 1 }
  const colorA = unit.reference(reference)
  const colorB = unit.reference(reference)
  const initialState = withBaseState({
    setting: withBaseSetting({
      color: attribute.color({ content: [colorA, colorB] })
    })
  })
  const updatedState = withBaseState({
    setting: withBaseSetting({
      color: attribute.color({ content: [colorB] })
    })
  })

  store.dispatch(updateTheme(initialState.theme))
  store.dispatch(removeColor(colorA))
  const state = store.getState()

  expect(state).toEqual(updatedState)
})

it('`updateColor` update color', () => {
  const initialReference = { key: 'swatch', value: 'primary', ordinal: 1 }
  const initialColorA = unit.reference(initialReference)
  const initialColorB = unit.reference(initialReference)
  const initialState = withBaseState({
    setting: withBaseSetting({
      color: attribute.color({ content: [initialColorA, initialColorB] })
    })
  })
  const updatedReference = { key: 'swatch', value: 'secondary', ordinal: 2 }
  const updatedColorA = unit.reference(updatedReference)
  const updatedState = withBaseState({
    setting: withBaseSetting({
      color: attribute.color({ content: [updatedColorA, initialColorB] })
    })
  })

  store.dispatch(updateTheme(initialState.theme))
  store.dispatch(
    updateColor(
      initialColorA,
      updatedReference.value,
      updatedReference.key,
      updatedReference.ordinal
    )
  )
  const state = store.getState()

  expect(state).toEqual(updatedState)
})
