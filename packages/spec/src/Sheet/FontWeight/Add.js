import React, { Fragment, Component } from 'react'
import { withFontWeightContent } from '@airtheme/make'
import NewUnit from '../../components/NewUnit'
import EditForm from '../../components/EditForm'
import { castNumber } from '@airtheme/core'
import {
  InvisibleInput,
  IncrementUnit,
  UtilityButton,
  QuickKey
} from '@airtheme/ui'
import { attribute, unit } from '@airtheme/type'
import FontWeightSpecimen from '../../Specimen/FontWeight'

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
            <QuickKey>
              <em>esc</em> cancel
            </QuickKey>
          </EditForm.Header>
          <EditForm.Specimen>
            <FontWeightSpecimen pad unit={unit} attribute={attribute} />
          </EditForm.Specimen>
          <EditForm.Units>
            <EditForm.Units.Unit combinedGroup>
              <InvisibleInput
                placeholder="Theme key"
                onChange={e => updateName(e.target.value)}
                value={unit.name}
              />
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
          <EditForm.Footer>
            <QuickKey>
              <em>enter</em> submit
            </QuickKey>
          </EditForm.Footer>
        </EditForm>
      </Fragment>
    )}
  />
))

export default Add
