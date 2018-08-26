import React, { Fragment } from 'react'
import styled from 'styled-components'

const printUnrenderable = val => {
  if (val === null) {
    return 'null'
  }

  if (typeof val === 'undefined') {
    return 'undefined'
  }

  if (Array.isArray(val)) {
    return '[array]'
  }

  if (typeof val === 'object') {
    return '{object}'
  }

  return val
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 120px auto;
  grid-auto-flow: row;
`

const Name = styled.strong`
  grid-column: span 2;
`

export const printObject = (name, obj) => (
  <Container>
    <Name>{name}</Name>
    {Object.entries(obj).map(([key, val], idx) => (
      <Fragment key={idx}>
        <label>{key}</label>
        <span>{printUnrenderable(val)}</span>
      </Fragment>
    ))}
  </Container>
)

export const printNode = (key, val) => (
  <Container>
    <Fragment>
      <label>{key}</label>
      <span>{val}</span>
    </Fragment>
  </Container>
)
