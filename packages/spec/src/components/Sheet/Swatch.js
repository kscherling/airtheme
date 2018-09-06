import React from 'react'
import { Card } from '@airtheme/ui'
import { mapSwatch } from '../../utils/mapThemeToProps'
import connectTheme from '../../utils/connectTheme'
import AttributeEntries from '../../utils/AttributeEntries'

const Swatch = ({ swatch }) => {
  return (
    <Card pad border>
      <AttributeEntries
        attribute={swatch}
        component={({ name, value }) => `${name}: ${value}`}
      />
    </Card>
  )
}

export default connectTheme(mapSwatch)(Swatch)
