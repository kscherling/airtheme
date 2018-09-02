import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {
  mapBaseLineHeight,
  mapBaseLineHeightContent,
  updateBaseLineHeightView,
  updateBaseLineHeight,
  SimpleList
} from '@airtheme/make'
import { AttributeBaseContent, Attribute } from '../lib/ModifyTypes'

const BaseLineHeightAttribute = connect(
  mapBaseLineHeight,
  { updateBaseLineHeightView }
)(({ baseLineHeight: { view, viewable }, updateBaseLineHeightView }) => (
  <Attribute
    view={view}
    viewable={viewable}
    updateView={updateBaseLineHeightView}
  />
))

const BaseLineHeightContent = connect(
  mapBaseLineHeightContent,
  { updateBaseLineHeight }
)(({ content, updateBaseLineHeight }) => (
  <Fragment>
    <AttributeBaseContent content={content} update={updateBaseLineHeight} />
  </Fragment>
))

const BaseLineHeight = () => (
  <SimpleList.OneColumn>
    <BaseLineHeightAttribute />
    <BaseLineHeightContent />
  </SimpleList.OneColumn>
)

export default BaseLineHeight
