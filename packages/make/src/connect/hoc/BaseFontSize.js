import { connect } from 'react-redux'
import { mapBaseFontSize, mapBaseFontSizeContent } from '../mapStateToProps'
import { updateBaseFontSize } from '../../action'

export const withBaseFontSizeAttribute = connect(mapBaseFontSize)
export const withBaseFontSizeContent = connect(
  mapBaseFontSizeContent,
  { updateBaseFontSize }
)
