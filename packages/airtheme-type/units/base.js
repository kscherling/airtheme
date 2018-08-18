// unit
// The base unit for all css units

export const unit = {

    // type
    // string : The name of the unit.

    type: 'unit',

    // value
    // Any : The value of the unit

    value: null
}

// createUnit
// Accepts a type and returns a unit

const createUnit = ({ type }) =>  Object.assign({}, unit, { type })

// createFactory
// Accepts a unit object and returns a function that is used to create the unit

export const createUnitFactoryFor = unit => ({ value }) => Object.assign({}, unit, { value })


export default createUnit
