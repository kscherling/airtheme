import React from 'react'
import { connect } from 'react-redux'
import { mapSwatch, updateSwatchView } from '@airtheme/make'
import { Input } from '../lib/basicControls'
import { ViewTabs } from '../lib/ViewTabs'

export const Swatch = connect(
  mapSwatch,
  { updateSwatchView }
)(({ swatch: { view, viewable }, updateSwatchView }) => (
  <ViewTabs>
    {viewable.map((unit, idx) => (
      <Tab
        key={idx}
        active={view === unit}
        onClick={() => updateSwatchView(unit)}
      >
        {unit}
      </Tab>
    ))}
  </ViewTabs>
))
