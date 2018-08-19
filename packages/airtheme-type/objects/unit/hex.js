import createUnit, { createUnitFactoryFor } from './base'

// hex
// hex, alpha : A made up unit that can express any hex, rgb, or rgba value.
// Units are serialized to the smallest css var that expresses

const hex = createUnit({ type: 'hex' })

// createHex
// create an instance of type hex

const createHex = createFactory(hex)

export default createHex
