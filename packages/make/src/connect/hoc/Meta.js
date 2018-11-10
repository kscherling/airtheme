import { connect } from 'react-redux'
import { mapMeta } from '../mapStateToProps'
import { updateThemeName } from '../../action'

export const withThemeMeta = connect(
  mapMeta,
  { updateThemeName }
)
