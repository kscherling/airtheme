import { connect } from 'react-redux'
import { mapFontWeight, mapFontWeightContent } from '../mapStateToProps'
import { updateFontWeight, addFontWeight, removeFontWeight } from '../../action'

export const withFontWeightAttribute = connect(mapFontWeight)
export const withFontWeightContent = connect(
  mapFontWeightContent,
  { updateFontWeight, addFontWeight, removeFontWeight }
)
