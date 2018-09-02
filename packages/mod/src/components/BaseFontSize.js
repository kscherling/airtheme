import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {
  mapBaseFontSize,
  mapBaseFontSizeContent,
  updateBaseFontSize,
  SimpleList
} from '@airtheme/make'
import { AttributeBaseContent, Attribute } from '../lib/ModifyTypes'

const BaseFontSizeAttribute = connect(mapBaseFontSize)(
  ({ baseFontSize: { view, viewable } }) => (
    <Attribute view={view} viewable={viewable} />
  )
)

const BaseFontSizeContent = connect(
  mapBaseFontSizeContent,
  { updateBaseFontSize }
)(({ content, updateBaseFontSize }) => (
  <Fragment>
    <AttributeBaseContent content={content} update={updateBaseFontSize} />
  </Fragment>
))

const BaseFontSize = () => (
  <SimpleList.OneColumn>
    <BaseFontSizeAttribute />
    <BaseFontSizeContent />
  </SimpleList.OneColumn>
)

export default BaseFontSize
