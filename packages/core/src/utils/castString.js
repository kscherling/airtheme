import humps from 'humps'
import { compose } from 'fp'

const titlize = str =>
  str
    .split(' ')
    .reduce(
      (acc, word) => [...acc, word.replace(word[0], word[0].toUpperCase())],
      []
    )
    .join(' ')

export const castWords = camelizedKey =>
  humps.decamelize(camelizedKey, { separator: ' ' })

export const castTitle = compose(
  titlize,
  castWords
)
