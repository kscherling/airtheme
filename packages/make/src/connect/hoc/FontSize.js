import { connect } from 'react-redux'
import { mapFontSize, mapFontSizeContent } from '../mapStateToProps'
import { updateFontSize, addFontSize, removeFontSize } from '../../action'

export const withFontSizeAttribute = connect(mapFontSize)
export const withFontSizeContent = connect(
  mapFontSizeContent,
  { updateFontSize, addFontSize, removeFontSize }
)
