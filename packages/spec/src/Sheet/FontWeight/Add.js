import React, { Fragment, Component } from 'react'
import { withFontWeightContent } from '@airtheme/make'
import NewUnit from '../../components/NewUnit'
import EditForm from '../../components/EditForm'
import { castNumber } from '@airtheme/core'
import { InvisibleInput, IncrementUnit, UtilityButton } from '@airtheme/ui'
import { attribute, unit } from '@airtheme/type'
import AddSpeciment from './AddSpecimen'

const ESC = 27
const ENTER = 13

class KeyboardEvents extends Component {
  static defaultProps = {
    eventMap: {}
  }

  handleKeydown = e => {
    const eventHandler = this.props.eventMap[e.keyCode]

    eventHandler && eventHandler(e)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown)
  }

  render() {
    const { children } = this.props
    return Boolean(children) ? children : null
  }
}

const Add = withFontWeightContent(({ addFontWeight, content, hide }) => (
  <NewUnit
    unitDefaults={{ value: 100 }}
    unit={unit.string}
    attribute={attribute.fontWeight}
    nextOrdinal={content.length + 1}
    render={({ attribute, unit, updateName, updateValue }) => (
      <Fragment>
        <KeyboardEvents
          eventMap={{
            [ESC]: hide,
            [ENTER]: () => {
              addFontWeight(unit.value, unit.name, unit.ordinal)
              hide()
            }
          }}
        />
        <EditForm>
          <EditForm.Header>
            <strong>Add Font Weight</strong>
            <div>Cancel (Esc)</div>
          </EditForm.Header>
          <EditForm.Name>
            <InvisibleInput
              placeholder="Key"
              onChange={e => updateName(e.target.value)}
              value={unit.name}
            />
          </EditForm.Name>
          <EditForm.Specimen>
            <AddSpeciment attribute={attribute} />
          </EditForm.Specimen>
          <EditForm.Units>
            <EditForm.Units.Unit incrementGroup>
              <InvisibleInput
                placeholder="Value"
                onChange={e => updateValue(castNumber(e.target.value))}
                value={unit.value}
              />
              <IncrementUnit
                update={(_, { value }) => updateValue(value)}
                unit={unit}
                options={{ step: 100 }}
                castValueFrom={castNumber}
                castValueTo={castNumber}
              />
            </EditForm.Units.Unit>
          </EditForm.Units>
          <EditForm.Footer>Ok (Enter)</EditForm.Footer>
        </EditForm>
      </Fragment>
    )}
  />
))

export default Add
