import createUnit from './base'

// hexa
// hex, alpha : A made up unit that can express any hex, rgb, or rgba value.
// Units are serialized to the smallest css var that expresses

const hexa = createUnit({ type: 'hexa' })

const createHexa = createFactory(hexa)

export default createHexa
