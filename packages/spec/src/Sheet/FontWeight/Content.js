import React from 'react'
import { withFontWeightContent } from '@airtheme/make'
import Unit from './Unit'
import AttributeContent from '../../components/AttributeContent'

const Content = withFontWeightContent(({ content }) => (
  <AttributeContent
    content={content}
    renderUnit={({ unit, idx }) => <Unit unit={unit} key={idx} />}
  />
))

export default Content
