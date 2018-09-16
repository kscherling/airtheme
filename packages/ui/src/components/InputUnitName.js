import React from 'react'
import styled, { css } from 'styled-components'
import InvisibleInput from './InvisibleInput'
const noop = () => null

const InputUnitName = ({
  unit = {},
  update = noop,
  disabled = false,
  placeholder = 'Unit name'
} = {}) => (
  <InvisibleInput
    disabled={disabled}
    value={unit.name}
    onChange={e => update(unit, { name: e.target.value })}
  />
)

export default InputUnitName
