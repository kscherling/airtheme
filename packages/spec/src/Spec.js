import React, { Fragment } from 'react'
import Name from './components/Name'
import Version from './components/Version'
import Type from './components/Type'
import BaseFontSize from './components/BaseFontSize'
import BaseLineHeight from './components/BaseLineHeight'
import BaseSpacing from './components/BaseSpacing'
import Swatch from './components/Swatch'
import FontFace from './components/FontFace'

const Spec = () => (
  <Fragment>
    <Name />
    <br />
    <Version />
    <br />
    <Type />
    <br />
    <BaseFontSize />
    <br />
    <BaseLineHeight />
    <br />
    <BaseSpacing />
    <br />
    <Swatch />
    <FontFace />
  </Fragment>
)

export default Spec
