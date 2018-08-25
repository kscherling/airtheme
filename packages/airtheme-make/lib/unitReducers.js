import { unit } from '@airtheme/type'
import { eq, not } from './helpers'

export const addUnit = (state, { key, value, ordinal }) => ({
  ...state,
  content: [...state.content, unit[state.unit]({ key, ordinal, value })]
})

export const removeUnit = (state, { original }) => ({
  ...state,
  content: state.content.filter(not(original))
})

export const updateUnit = (state, { original, key, value, ordinal }) => ({
  ...state,
  content: state.content.map(
    unit => (eq(unit, original) ? { ...unit, value, key, ordinal } : unit)
  )
})
