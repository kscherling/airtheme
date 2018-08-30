import makeStore from '../../../store/index'
import {
  addColor,
  updateColor,
  removeColor
} from '../../../action/theme/setting/color'
import { updateTheme } from '../../../action/root'
import baseState, { withBaseState } from '../../../test/baseState'
import { attribute, unit } from '@airtheme/type'
import { withBaseSetting } from '../../../test/baseSetting'

let store

beforeEach(() => {
  store = makeStore()
  store.dispatch(updateTheme(baseState.theme))
})

it('`addColor` adds a color', () => {
  const value = 'red'
  const name = 'primary'
  const ordinal = 1
  const initialColor = unit.reference({ name, value, ordinal })
  const updatedState = withBaseState({
    setting: withBaseSetting({
      color: attribute.color({ content: [initialColor] })
    })
  })

  store.dispatch(addColor(value, name, ordinal))
  const state = store.getState()

  expect(state).toEqual(updatedState)
})

it('`removeColor` removes color', () => {
  const reference = { name: 'primary', value: 'red', ordinal: 1 }
  const colorA = unit.reference(name)
  const colorB = unit.reference(name)
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
  const initialReference = { name: 'primary', value: 'red', ordinal: 1 }
  const initialColorA = unit.reference(initialReference)
  const initialColorB = unit.reference(initialReference)
  const initialState = withBaseState({
    setting: withBaseSetting({
      color: attribute.color({ content: [initialColorA, initialColorB] })
    })
  })
  const updatedReference = { name: 'primary', value: 'blue', ordinal: 2 }
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
      updatedReference
    )
  )
  const state = store.getState()

  expect(state).toEqual(updatedState)
})
