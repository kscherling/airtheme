import makeStore from '../../../store/index'
import {
  addSpacing,
  updateSpacing,
  removeSpacing
} from '../../../action/theme/setting/spacing'
import { updateTheme } from '../../../action/root'
import { theme } from '@airtheme/type'
import { attribute, unit } from '@airtheme/type'
import { setting, base } from '@airtheme/type'

let store

beforeEach(() => {
  store = makeStore()
  store.dispatch(updateTheme(theme.base()))
})

it('`addSpacing` adds a font size', () => {
  const value = 1
  const name = 'sm'
  const ordinal = 1
  const initialSpacing = unit.factor({ name, value, ordinal })
  const updatedState = theme.base({
    setting: setting.base({
      spacing: attribute.spacing({ content: [initialSpacing] })
    })
  })

  store.dispatch(addSpacing(value, name, ordinal))
  const state = store.getState()

  expect(state).toEqual({ theme: updatedState })
})

it('`removeSpacing` removes font size', () => {
  const factor = { name: 'sm', value: 1, ordinal: 1 }
  const spacingA = unit.factor(factor)
  const spacingB = unit.factor(factor)
  const initialState = theme.base({
    setting: setting.base({
      spacing: attribute.spacing({ content: [spacingA, spacingB] })
    })
  })
  const updatedState = theme.base({
    setting: setting.base({
      spacing: attribute.spacing({ content: [spacingB] })
    })
  })

  store.dispatch(updateTheme(initialState))
  store.dispatch(removeSpacing(spacingA))
  const state = store.getState()

  expect(state).toEqual({ theme: updatedState })
})

it('`updateSpacing` update font size', () => {
  const initialFactor = { name: 'sm', value: 1, ordinal: 1 }
  const initialSpacingA = unit.factor(initialFactor)
  const initialSpacingB = unit.factor(initialFactor)
  const initialState = theme.base({
    setting: setting.base({
      spacing: attribute.spacing({
        content: [initialSpacingA, initialSpacingB]
      })
    })
  })
  const updatedFactor = { name: 'sm', value: 1.25, ordinal: 2 }
  const updatedSpacing = unit.factor(updatedFactor)
  const updatedState = theme.base({
    setting: setting.base({
      spacing: attribute.spacing({
        content: [updatedSpacing, initialSpacingB]
      })
    })
  })

  store.dispatch(updateTheme(initialState))
  store.dispatch(updateSpacing(initialSpacingA, updatedFactor))
  const state = store.getState()

  expect(state).toEqual({ theme: updatedState })
})
