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
  store.dispatch(updateTheme(baseState))
})

it('`addSwatch` adds a swatch', () => {
  const value = '#000000,1'
  const name = 'ivory black'
  const ordinal = 1
  const initialSwatch = unit.hexa({ value, name, ordinal })
  const updatedState = withBaseState({
    swatch: attribute.swatch({ content: [initialSwatch] })
  })

  store.dispatch(addSwatch(value, name, ordinal))
  const state = store.getState()

  expect(state).toEqual(updatedState)
})

it('`removeSwatch` removes a swatch', () => {
  const initialHexa = { value: '#000000,1', name: 'ivory black', ordinal: 1 }
  const swatchA = unit.hexa(initialHexa)
  const swatchB = unit.hexa(initialHexa)
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
  const initialHexa = { value: '#000000,1', name: 'ivory black', ordinal: 1 }
  const initialSwatchA = unit.hexa(initialHexa)
  const initialSwatchB = unit.hexa(initialHexa)
  const updatedHexa = { value: '#111111,1', name: 'black', ordinal: 2 }
  const updatedSwatchA = unit.hexa(updatedHexa)
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
