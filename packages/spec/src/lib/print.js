import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'

const Strike = styled.span`
  text-decoration: line-through;
  color: #999;
`

const printUnrenderable = val => {
  if (val === null) {
    return <Strike>null</Strike>
  }

  if (typeof val === 'undefined') {
    return <Strike>undefined</Strike>
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
  grid-gap: 0.75rem;

  ${({ shade }) =>
    shade &&
    css`
      background: #f2f2f2;
    `};

  margin-bottom: 1rem;
`

const Name = styled.strong`
  grid-column: span 2;
`

const Empty = styled.div`
  grid-column: span 2;
  padding: 1rem;
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

export const printUnit = (unit, idx) => (
  <Container key={idx}>
    <Name>{unit.name}</Name>
    {/* {Object.entries(obj).map(([key, val], idx) => (
      <Fragment key={idx}>
        <label>{key}</label>
        <span>{printUnrenderable(val)}</span>
      </Fragment>
    ))} */}
  </Container>
)

export const printAttributeContent = (name, content = []) =>
  content.length ? (
    <Container shade>
      <Name>{name}</Name>
      {content.map((unit, idx) => printUnit(unit, idx))}
    </Container>
  ) : (
    <Container shade>
      <Empty>{name}</Empty>
    </Container>
  )
