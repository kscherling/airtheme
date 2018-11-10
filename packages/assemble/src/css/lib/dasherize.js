import humps from 'humps'

const dasherize = string => humps.decamelize(string, { separator: '-' })

export default dasherize
