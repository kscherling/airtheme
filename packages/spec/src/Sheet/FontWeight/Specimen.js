import React from 'react'
import styled, { withTheme } from 'styled-components'
import { baseTypography } from '../../utils/styleHelpers'
import Spec from '../../components/Spec'

const DEFAULT_TEXT = 'The quick brown fox jumped over the lazy dog.'

// TODO: Move to general utils
const mapFontWeight = ({
  theme: { setting: { fontWeight } = {} } = {}
} = {}) => ({
  fontWeight
})

const fontWeight = key => props => mapFontWeight(props).fontWeight[key]

const Specimen = styled.div.attrs({ children: DEFAULT_TEXT })`
  font-weight: ${({ unit: { name }, ...props }) => fontWeight(name)(props)};
  ${baseTypography};
`

export default withTheme(Specimen)
