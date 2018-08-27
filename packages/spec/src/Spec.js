import React from 'react'
import Name from './components/Name'
import Version from './components/Version'
import Id from './components/Id'
import BaseFontSize from './components/BaseFontSize'
import BaseLineHeight from './components/BaseLineHeight'
import BaseSpacing from './components/BaseSpacing'
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

const Spec = () => (
  <div>
    <Id />
    <Name />
    <Version />
    <BaseFontSize />
    <BaseLineHeight />
    <BaseSpacing />
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
  </div>
)

export default Spec
