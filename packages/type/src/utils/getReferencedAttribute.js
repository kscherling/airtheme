import { dig } from 'fp'

const getReferencedAttribute = ({ reference }, theme) => dig(reference, theme)

export default getReferencedAttribute
