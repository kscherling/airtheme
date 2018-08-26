import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'

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
  grid-template-columns: 160px auto;
  grid-auto-flow: row;

  ${({ shade }) =>
    shade &&
    css`
      background: #f2f2f2;
    `};
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

export const printUnit = unit => (
  <Container>
    <Name>{unit.name}</Name>
    {Object.entries(obj).map(([key, val], idx) => (
      <Fragment key={idx}>
        <label>{key}</label>
        <span>{printUnrenderable(val)}</span>
      </Fragment>
    ))}
  </Container>
)

export const printAttributeContent = (name, content = []) =>
  content.length ? (
    <Container shade>
      <Name>{name}</Name>
      {content.map((unit, idx) => printUnit(unit))}
    </Container>
  ) : (
    <Container shade>No {name}</Container>
  )