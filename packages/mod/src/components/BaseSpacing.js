import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {
  mapBaseSpacing,
  mapBaseSpacingContent,
  updateBaseSpacing,
  SimpleList
} from '@airtheme/make'
import { AttributeBaseContent, Attribute } from '../lib/ModifyTypes'

const BaseSpacingAttribute = connect(mapBaseSpacing)(
  ({ baseSpacing: { view, viewable } }) => (
    <Attribute view={view} viewable={viewable} />
  )
)

const BaseSpacingContent = connect(
  mapBaseSpacingContent,
  { updateBaseSpacing }
)(({ content, updateBaseSpacing }) => (
  <Fragment>
    <AttributeBaseContent content={content} update={updateBaseSpacing} />
  </Fragment>
))

const BaseSpacing = () => (
  <SimpleList.OneColumn>
    <BaseSpacingAttribute />
    <BaseSpacingContent />
  </SimpleList.OneColumn>
)

export default BaseSpacing
