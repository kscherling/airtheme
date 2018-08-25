import makeStore from '../../../store/index'
import {
  addSpacing,
  updateSpacing,
  removeSpacing
} from '../../../action/theme/setting/spacing'
import { updateTheme } from '../../../action/root'
import baseState, { withBaseState } from '../../../test/baseState'
import { attribute, unit } from '@airtheme/type'
import { withBaseSetting } from '../../../test/baseSetting'

let store

beforeEach(() => {
  store = makeStore()
  store.dispatch(updateTheme(baseState.theme))
})

it('`addSpacing` adds a font size', () => {
  const value = 1
  const reference = 'baseSpacing'
  const ordinal = 1
  const initialSpacing = unit.factor({ reference, value, ordinal })
  const updatedState = withBaseState({
    setting: withBaseSetting({
      spacing: attribute.spacing({ content: [initialSpacing] })
    })
  })

  store.dispatch(addSpacing(value, reference, ordinal))
  const state = store.getState()

  expect(state).toEqual(updatedState)
})

it('`removeSpacing` removes font size', () => {
  const factor = { reference: 'baseSpacing', value: 1, ordinal: 1 }
  const spacingA = unit.factor(factor)
  const spacingB = unit.factor(factor)
  const initialState = withBaseState({
    setting: withBaseSetting({
      spacing: attribute.spacing({ content: [spacingA, spacingB] })
    })
  })
  const updatedState = withBaseState({
    setting: withBaseSetting({
      spacing: attribute.spacing({ content: [spacingB] })
    })
  })

  store.dispatch(updateTheme(initialState.theme))
  store.dispatch(removeSpacing(spacingA))
  const state = store.getState()

  expect(state).toEqual(updatedState)
})

it('`updateSpacing` update font size', () => {
  const initialFactor = { reference: 'baseSpacing', value: 1, ordinal: 1 }
  const initialSpacingA = unit.factor(initialFactor)
  const initialSpacingB = unit.factor(initialFactor)
  const initialState = withBaseState({
    setting: withBaseSetting({
      spacing: attribute.spacing({
        content: [initialSpacingA, initialSpacingB]
      })
    })
  })
  const updatedFactor = { reference: 'baseSpacing', value: 1.25, ordinal: 2 }
  const updatedSpacing = unit.factor(updatedFactor)
  const updatedState = withBaseState({
    setting: withBaseSetting({
      spacing: attribute.spacing({
        content: [updatedSpacing, initialSpacingB]
      })
    })
  })

  store.dispatch(updateTheme(initialState.theme))
  store.dispatch(
    updateSpacing(
      initialSpacingA,
      updatedFactor.value,
      updatedFactor.reference,
      updatedFactor.ordinal
    )
  )
  const state = store.getState()

  expect(state).toEqual(updatedState)
})
