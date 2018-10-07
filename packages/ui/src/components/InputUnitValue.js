import React from 'react'
import styled, { css } from 'styled-components'
import InvisibleInput from './InvisibleInput'
const noop = () => null

// TODO: Validate - Don't allow negatives
const InputUnitValue = ({
  unit = {},
  update = noop,
  placeholder = 'Update',
  castValueTo = val => val
} = {}) => (
  <InvisibleInput
    value={unit.value}
    onChange={e => update(unit, { value: castValueTo(e.target.value) })}
  />
)

export default InputUnitValue
