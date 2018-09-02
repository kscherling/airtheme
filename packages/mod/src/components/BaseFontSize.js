import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {
  mapBaseFontSize,
  mapBaseFontSizeContent,
  updateBaseFontSizeView,
  addBaseFontSize,
  removeBaseFontSize,
  updateBaseFontSize,
  SimpleList
} from '@airtheme/make'
import { AttributeBaseContent, Attribute } from '../lib/ModifyTypes'

const BaseFontSizeAttribute = connect(
  mapBaseFontSize,
  { updateBaseFontSizeView }
)(({ baseFontSize: { view, viewable } }) => (
  <Attribute view={view} viewable={viewable} />
))

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
    <SimpleList.Header>Base Font Size</SimpleList.Header>
    <BaseFontSizeAttribute />
    <BaseFontSizeContent />
  </SimpleList.OneColumn>
)

export default BaseFontSize
