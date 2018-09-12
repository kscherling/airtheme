import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { SimpleList } from '@airtheme/ui'
import { AttributeBaseContent, Attribute } from '../lib/ModifyTypes'
import {
  withBaseSpacingAttribute,
  withBaseSpacingContent
} from '../connector/BaseSpacing'

const BaseSpacingAttribute = withBaseSpacingAttribute(
  ({ baseSpacing: { view, viewable } }) => (
    <Attribute view={view} viewable={viewable} />
  )
)

const BaseSpacingContent = withBaseSpacingContent(
  ({ content, updateBaseSpacing }) => (
    <Fragment>
      <AttributeBaseContent content={content} update={updateBaseSpacing} />
    </Fragment>
  )
)

const BaseSpacing = () => (
  <SimpleList.OneColumn>
    <BaseSpacingAttribute />
    <BaseSpacingContent />
  </SimpleList.OneColumn>
)

export default BaseSpacing
