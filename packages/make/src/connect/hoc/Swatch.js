import { connect } from 'react-redux'
import { mapSwatch, mapSwatchContent } from '../mapStateToProps'
import { updateSwatch, addSwatch, removeSwatch } from '../../action'

export const withSwatchAttribute = connect(mapSwatch)
export const withSwatchContent = connect(
  mapSwatchContent,
  { updateSwatch, addSwatch, removeSwatch }
)
