import makeStore from '../../store/index'
import {
  updateSwatch,
  addSwatch,
  removeSwatch
} from '../../action/theme/swatch'
import { updateTheme } from '../../action/root'
import baseState, { withBaseState } from '../../test/baseState'
import { attribute, unit } from '@airtheme/type'

let store

beforeEach(() => {
  store = makeStore()
  store.dispatch(updateTheme(baseState.theme))
})

it('`addSwatch` adds a swatch', () => {
  const hexa = '#000000,1'
  const initialSwatch = unit.hexa({ value: hexa })
  const updatedState = withBaseState({
    swatch: attribute.swatch({ content: [initialSwatch] })
  })

  store.dispatch(addSwatch(hexa))
  const state = store.getState()

  expect(state).toEqual(updatedState)
})

it('`removeSwatch` removes a swatch', () => {
  const hexa = '#000000,1'
  const swatchA = unit.hexa({ value: hexa })
  const swatchB = unit.hexa({ value: hexa })
  const initialState = withBaseState({
    swatch: attribute.swatch({ content: [swatchA, swatchB] })
  })
  const updatedState = withBaseState({
    swatch: attribute.swatch({ content: [swatchB] })
  })

  store.dispatch(updateTheme(initialState.theme))
  store.dispatch(removeSwatch(swatchA))
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
