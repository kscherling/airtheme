import React from 'react'
import styled, { withTheme } from 'styled-components'
import Spec from '../../components/Spec'
import Deserialize from '../../components/Deserialize'

const DEFAULT_TEXT = 'The quick brown fox jumped over the lazy dog.'

const Styles = styled.div`
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-weight: ${({ fontWeight }) => fontWeight};
`

const AddSpecimen = ({ attribute }) => (
  <Deserialize
    attribute={attribute}
    render={({ deserialized }) => (
      <Styles fontWeight={Object.values(deserialized)[0]}>
        {DEFAULT_TEXT}
      </Styles>
    )}
  />
)

export default AddSpecimen
