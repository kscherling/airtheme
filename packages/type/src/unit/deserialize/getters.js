import { dig } from 'fp'

export const getReferencedAttribute = ({ reference }, theme) => {
  return dig(reference, theme)
}
