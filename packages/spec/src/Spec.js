import React, { Fragment } from 'react'
import Name from './components/Name'
import Version from './components/Version'
import Type from './components/Type'
import BaseFontSize from './components/BaseFontSize'
import BaseLineHeight from './components/BaseLineHeight'
import BaseSpacing from './components/BaseSpacing'
import Swatch from './components/Swatch'
import FontFace from './components/FontFace'
import Color from './components/Color'
import FontSize from './components/FontSize'
import FontWeight from './components/FontWeight'
import Spacing from './components/Spacing'

const Spec = () => (
  <Fragment>
    <Name />
    <Version />
    <Type />
    <BaseFontSize />
    <BaseLineHeight />
    <BaseSpacing />
    <Swatch />
    <FontFace />
    <Color />
    <FontSize />
    <FontWeight />
    <Spacing />
  </Fragment>
)

export default Spec
