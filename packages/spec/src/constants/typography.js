export const alpha = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]

const upCase = string => string.toUpperCase()

export const lowercase = alpha.join()
export const uppercase = alpha.map(upCase).join()
export const allcase = alpha
  .reduce((acc, char) => [...acc, upCase(char), char], [])
  .join('')

export const numerals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].join(
  ''
)
export const puncuation = [
  '.',
  ':',
  ',',
  ';',
  '()',
  '{}',
  '[]',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*'
].join('')
export const typeset = allcase.concat(numerals, puncuation)
