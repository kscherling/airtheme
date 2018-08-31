import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'
import { Grid, SimpleList } from '@airtheme/make'

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
  grid-template-columns: 1fr 1fr;
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

export const Node = ({ name, val }) => (
  <Fragment>
    <strong>{name}</strong>
    <span>{printUnrenderable(val)}</span>
  </Fragment>
)

export const Unit = ({ unit }) => (
  <SimpleList.FourColumns>
    <span>{printUnrenderable(unit.name)}</span>
    <span>{printUnrenderable(unit.value)}</span>
    <span>{printUnrenderable(unit.ordinal)}</span>
    <span>{printUnrenderable(unit.type)}</span>
  </SimpleList.FourColumns>
)

export const Attribute = ({ attribute }) => (
  <SimpleList.TwoColumns>
    {Object.entries(attribute).map(([key, val], idx) => (
      <Node key={idx} name={key} val={val} />
    ))}
  </SimpleList.TwoColumns>
)

export const AttributeContent = ({ content = [] }) => (
  <SimpleList.OneColumn>
    {content.length ? (
      content.map((unit, idx) => <Unit key={idx} unit={unit} />)
    ) : (
      <SimpleList>Empty</SimpleList>
    )}
  </SimpleList.OneColumn>
)

export const printObject = (name, obj) => (
  <Container>
    <Name>{name}</Name>
    {Object.entries(obj).map(([key, val], idx) => (
      <Container key={idx}>
        <label>{key}</label>
        <span>{printUnrenderable(val)}</span>
      </Container>
    ))}
  </Container>
)

export const printUnit = (unit, idx) => (
  <Container key={idx}>
    {Object.entries(unit).map(([key, val], idx) => (
      <Container key={idx}>
        <label>{key}</label>
        <span>{printUnrenderable(val)}</span>
      </Container>
    ))}
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