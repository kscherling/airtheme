import React, { Fragment, Component } from 'react'
import styled from 'styled-components'
import { SimpleList, SimpleTabs, THead } from '@airtheme/ui'

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
  <Fragment>
    <input
      placeholder="name"
      type="text"
      value={unit.name || ''}
      onChange={e => update(unit, { name: e.target.value })}
    />
    <input
      placeholder="value"
      type="text"
      value={unit.value || ''}
      onChange={e => update(unit, { value: e.target.value })}
    />
    <input
      placeholder="ordinal"
      type="text"
      value={unit.ordinal || ''}
      onChange={e => update(unit, { ordinal: e.target.value })}
    />
    <button type="button" onClick={() => remove(unit)}>
      remove
    </button>
  </Fragment>
)

export const BaseUnit = ({ unit, update }) => (
  <Fragment>
    <input
      disabled
      placeholder="name"
      type="text"
      value={unit.name || ''}
      onChange={e => update({ name: e.target.value })}
    />
    <input
      placeholder="value"
      type="text"
      value={unit.value || ''}
      onChange={e => update({ value: e.target.value })}
    />
    <input
      placeholder="ordinal"
      type="text"
      value={unit.ordinal || ''}
      onChange={e => update({ ordinal: e.target.value })}
    />
  </Fragment>
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
      <Fragment>
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
      </Fragment>
    )
  }
}

export const Attribute = ({ view, viewable, updateView = noop }) => (
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
)

export const AttributeContent = ({ content = [], update, remove, add }) => (
  <SimpleList.FourColumns>
    <THead colNames={['name', 'value', 'ordinal', 'unit']} />
    {content.length ? (
      content.map((unit, idx) => (
        <Unit key={idx} unit={unit} update={update} remove={remove} />
      ))
    ) : (
      <Strike style={{ gridColumn: 'span 4' }}>empty</Strike>
    )}
    <AddUnit nextOrdinal={content.length + 1} add={add} />
  </SimpleList.FourColumns>
)

export const AttributeBaseContent = ({
  content = { name: '', ordinal: '', value: '', object: '' },
  update
}) => (
  <SimpleList.ThreeColumns>
    <BaseUnit unit={content} update={update} />
  </SimpleList.ThreeColumns>
)
