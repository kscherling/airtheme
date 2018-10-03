import React from 'react'
import styled, { css } from 'styled-components'
import { Card } from '@airtheme/ui'
import { mapSwatch } from '../utils/mapThemeToProps'
import { connectTheme } from '@airtheme/make'
import AttributeEntries from '../utils/AttributeEntries'
import { withShade, isLight } from '@airtheme/ui'

const Chip = withShade(styled.div`
  width: 100%;
  height: 5rem;
  background: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  color: #ffffff90;

  ${isLight(css`
    color: #00000070;
    border: 1px solid #00000015;
  `)};
`)

const Swatch = ({ swatch }) => {
  return (
    <Card pad border>
      <AttributeEntries
        attribute={swatch}
        component={({ name, value }) => (
          <Chip color={value}>
            <span>{name}</span>
            <span>{value}</span>
          </Chip>
        )}
      />
    </Card>
  )
}

export default connectTheme(mapSwatch)(Swatch)
