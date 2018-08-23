import createStore from '../../store/index'
import {
  updateSwatch,
  addSwatch,
  removeSwatch
} from '../../action/theme/swatch'
import { updateTheme } from '../../action/root'
import baseState, { withBaseState } from '../../test/baseState'
import { attribute, unit } from '@airtheme/airtheme-type'

let store

beforeEach(() => {
  store = createStore()
  store.dispatch(updateTheme(baseState.theme))
})

it('`addSwatch` adds a swatch', () => {
  const swatch = '#000000,1'
  const updatedState = withBaseState({
    swatch: attribute.swatch({ content: [unit.hexa({ value: swatch })] })
  })

  store.dispatch(addSwatch(swatch))
  const state = store.getState()

  expect(state).toEqual(updatedState)
})

it('`removeSwatch` removes a swatch', () => {
  const swatch = '#000000,1'
  const swatchUnit1 = unit.hexa({ value: swatch })
  const swatchUnit2 = unit.hexa({ value: swatch })
  const initialState = withBaseState({
    swatch: attribute.swatch({ content: [swatchUnit1, swatchUnit2] })
  })
  const updatedState = withBaseState({
    swatch: attribute.swatch({ content: [swatchUnit2] })
  })

  store.dispatch(updateTheme(initialState.theme))
  store.dispatch(removeSwatch(swatchUnit1))

  const state = store.getState()

  expect(state).toEqual(updatedState)
})

it('`updateSwatch` updates a swatch', () => {
  const initialHexa = '#000000,1'
  const initialSwatchA = unit.hexa({ value: initialHexa })
  const initialSwatchB = unit.hexa({ value: initialHexa })

  const updatedHexa = '#FFFFFF,1'
  const updatedSwatchA = unit.hexa({ value: updatedHexa })

  const initialState = withBaseState({
    swatch: attribute.swatch({ content: [initialSwatchA, initialSwatchB] })
  })
  const updatedState = withBaseState({
    swatch: attribute.swatch({ content: [updatedSwatchA, initialSwatchB] })
  })

  store.dispatch(updateTheme(initialState.theme))
  store.dispatch(updateSwatch(initialSwatchA, updatedHexa))
  const state = store.getState()

  expect(state).toEqual(updatedState)
})
