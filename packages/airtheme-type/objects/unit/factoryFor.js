// createFactoryFor
// Accepts a unit object and root schema
// returns a function used to create new unit instances

//prettier-ignore
const factoryFor =
  ({ type }, schema) =>
    ({ value }) =>
      Object.assign({}, schema, { type }, { value })

export default factoryFor
