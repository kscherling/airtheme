import React from 'react'
import { withFontWeightAttribute } from '@airtheme/make'
import Unit from './Unit'
import AttributeContent from '../../components/AttributeContent'

const Content = ({ fontWeight }) => {
  return (
    <AttributeContent
      content={fontWeight.content}
      renderUnit={({ unit, idx }) => (
        <Unit attribute={fontWeight} unit={unit} key={idx} />
      )}
    />
  )
}

export default withFontWeightAttribute(Content)
