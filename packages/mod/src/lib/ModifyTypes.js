import React from 'react'
import styled from 'styled-components'

export const Node = ({ label, value, onChange }) => (
  <Fragment>
    <strong>{label}</strong>
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </Fragment>
)

export const Input = ({ label, value, onChange }) => (
  <Container>
    <label>{label}</label>
    <span>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </span>
  </Container>
)
