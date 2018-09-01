import React, { Fragment } from 'react'
import styled from 'styled-components'
import { SimpleList } from '@airtheme/make'

const Strike = styled.span`
  text-decoration: line-through;
  color: #999;
`

export const Node = ({ label, value, onChange }) => (
  <Fragment>
    <strong>{label}</strong>
    <input type="text" value={value} onChange={e => onChange(e.target.value)} />
  </Fragment>
)

export const Unit = ({ unit, remove, update }) => (
  <SimpleList.FourColumns>
    <input
      placeholder="name"
      type="text"
      value={unit.name}
      onChange={e => update(unit, { name: e.target.value })}
    />
    <input
      placeholder="value"
      type="text"
      value={unit.value}
      onChange={e => update(unit, { value: e.target.value })}
    />
    <input
      placeholder="ordinal"
      type="text"
      value={unit.ordinal}
      onChange={e => update(unit, { ordinal: e.target.value })}
    />
    <button type="button" onClick={() => remove(unit)}>
      remove
    </button>
  </SimpleList.FourColumns>
)

const Attribute = () => {}
export const AttributeContent = ({ content = [], update, remove }) => (
  <SimpleList.OneColumn>
    <SimpleList.Subheader>Content</SimpleList.Subheader>
    {content.length ? (
      content.map((unit, idx) => (
        <Unit key={idx} unit={unit} update={update} remove={remove} />
      ))
    ) : (
      <SimpleList>
        <Strike>empty</Strike>
      </SimpleList>
    )}
  </SimpleList.OneColumn>
)
