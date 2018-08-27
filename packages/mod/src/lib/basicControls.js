import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 160px auto;
  grid-auto-flow: row;
  grid-gap: 0.75rem;

  ${({ shade }) =>
    shade &&
    css`
      background: #f2f2f2;
    `};

  margin-bottom: 1rem;
`

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
