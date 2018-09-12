import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'
import { SimpleList } from '@airtheme/ui'
import { THead } from '@airtheme/make'

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
    return `[array/${val.length}]`
  }

  if (typeof val === 'object') {
    return '{object}'
  }

  return val
}

export const Node = ({ name, val }) => (
  <Fragment>
    <strong>{name}</strong>
    <span>{printUnrenderable(val)}</span>
  </Fragment>
)

export const Unit = ({ unit }) => (
  <Fragment>
    <span>{printUnrenderable(unit.name)}</span>
    <span>{printUnrenderable(unit.value)}</span>
    <span>{printUnrenderable(unit.ordinal)}</span>
    <span>{printUnrenderable(unit.object)}</span>
  </Fragment>
)

export const Attribute = ({ attribute }) => (
  <SimpleList.TwoColumns>
    {Object.entries(attribute).map(([key, val], idx) => (
      <Node key={idx} name={key} val={val} />
    ))}
  </SimpleList.TwoColumns>
)

export const AttributeContent = ({ content = [] }) => (
  <SimpleList.FourColumns>
    <THead colNames={['name', 'value', 'ordinal', 'unit']} />
    {Array.isArray(content) ? (
      content.length ? (
        content.map((unit, idx) => <Unit key={idx} unit={unit} />)
      ) : (
        <Strike>empty</Strike>
      )
    ) : (
      <Unit unit={content} />
    )}
  </SimpleList.FourColumns>
)
