import React from 'react'

import Globals from './components/Globals'
import Swatch from './components/Swatch'
import FontFace from './components/FontFace'
import Color from './components/Color'
import FontSize from './components/FontSize'
import FontWeight from './components/FontWeight'
import Spacing from './components/Spacing'
import ColorContent from './components/ColorContent'
import SwatchContent from './components/SwatchContent'
import FontFaceContent from './components/FontFaceContent'
import FontSizeContent from './components/FontSizeContent'
import FontWeightContent from './components/FontWeightContent'
import SpacingContent from './components/SpacingContent'
import { Grid } from '@airtheme/make'

const Spec = () => (
  <Grid.OneColumn>
    <Globals />
    <Swatch />
    <SwatchContent />
    <FontFace />
    <FontFaceContent />
    <Color />
    <ColorContent />
    <FontSize />
    <FontSizeContent />
    <FontWeight />
    <FontWeightContent />
    <Spacing />
    <SpacingContent />
  </Grid.OneColumn>
)

export default Spec
