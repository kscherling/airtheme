// @flow
import unit from '../../unit'
import type { AttributeBaseSpacingT } from '../../flow/AttributeTypes'

const BaseSpacing: AttributeBaseSpacingT = {
  __typename: 'BaseSpacing',
  content: unit.px({ name: 'baseSpacing', value: 16 }),
  reference: null,
  unit: 'px',
  view: 'px',
  viewable: ['px']
}

export default BaseSpacing
