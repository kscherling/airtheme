import { unit } from '@airtheme/type'
import { eq, not } from './helpers'

export const addUnit = (state, { reference, value, ordinal }) => ({
  ...state,
  content: [...state.content, unit[state.unit]({ reference, ordinal, value })]
})

export const removeUnit = (state, { original }) => ({
  ...state,
  content: state.content.filter(not(original))
})

export const updateUnit = (state, { original, reference, value, ordinal }) => ({
  ...state,
  content: state.content.map(
    unit => (eq(unit, original) ? { ...unit, value, reference, ordinal } : unit)
  )
})
