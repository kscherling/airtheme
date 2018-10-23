import { unit } from '@airtheme/type'
import { eq, not } from './helpers'

const downcase = str => str && str.toLowerCase()

export const addUnit = (state, { name, value, ordinal }) => ({
  ...state,
  content: [
    ...state.content,
    unit[downcase(state.unit)]({ name, ordinal, value })
  ]
})

export const removeUnit = (state, { original }) => ({
  ...state,
  content: state.content.filter(not(original))
})

export const updateUnit = (state, { original, updated }) => ({
  ...state,
  content: state.content.map(
    unit => (eq(unit, original) ? { ...unit, ...updated } : unit)
  )
})

export const updateBaseUnit = (state, { updated }) => ({
  ...state,
  content: { ...state.content, ...updated }
})
