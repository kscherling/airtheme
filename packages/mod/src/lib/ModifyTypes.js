import React, { Fragment, Component } from 'react'
import styled from 'styled-components'
import { SimpleList, SimpleTabs } from '@airtheme/make'

const noop = () => {}
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

export const BaseUnit = ({ unit, update }) => (
  <SimpleList.ThreeColumns>
    <input
      disabled
      placeholder="name"
      type="text"
      value={unit.name}
      onChange={e => update({ name: e.target.value })}
    />
    <input
      placeholder="value"
      type="text"
      value={unit.value}
      onChange={e => update({ value: e.target.value })}
    />
    <input
      placeholder="ordinal"
      type="text"
      value={unit.ordinal}
      onChange={e => update({ ordinal: e.target.value })}
    />
  </SimpleList.ThreeColumns>
)

export class AddUnit extends Component {
  state = {
    name: '',
    value: '',
    ordinal: ''
  }

  handleSubmit = () => {
    const { name, value, ordinal } = this.state
    const { add, nextOrdinal } = this.props

    add(value, name, nextOrdinal)
    this.setState({
      name: '',
      value: '',
      ordinal: ''
    })
  }

  render() {
    const { name, value, ordinal } = this.state

    return (
      <SimpleList.FourColumns>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <input
          type="text"
          placeholder="value"
          value={value}
          onChange={e => this.setState({ value: e.target.value })}
        />
        <input
          disabled
          type="text"
          placeholder="ordinal"
          value={ordinal}
          onChange={e => this.setState({ ordinal: e.target.value })}
        />
        <button type="button" onClick={this.handleSubmit}>
          add
        </button>
      </SimpleList.FourColumns>
    )
  }
}

export const Attribute = ({ view, viewable, updateView = noop }) => (
  <SimpleList.OneColumn padding="1rem 0">
    <SimpleTabs>
      {viewable.map((unit, idx) => (
        <SimpleTabs.Tab
          key={idx}
          active={view === unit}
          onClick={() => updateView(unit)}
        >
          {unit}
        </SimpleTabs.Tab>
      ))}
    </SimpleTabs>
  </SimpleList.OneColumn>
)

export const AttributeContent = ({ content = [], update, remove }) => (
  <SimpleList.OneColumn>
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

export const AttributeBaseContent = ({ content = {}, update }) => (
  <SimpleList.OneColumn>
    <BaseUnit unit={content} update={update} />
  </SimpleList.OneColumn>
)
