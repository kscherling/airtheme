import createUnit, { createUnitFactoryFor } from './base'

// hex
// hex, alpha : A made up unit that can express any hex, rgb, or rgba value.
// Units are serialized to the smallest css var that expresses

const hex = createUnit({ type: 'hex' })

const createHexa = createFactory(hex)

export default createHex
