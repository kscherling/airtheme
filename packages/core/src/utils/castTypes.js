const isInt = (n) => n % 1 === 0
const isFloat = (n) => n % 1 !== 0;
const castFloat = number => parseFloat(number.toFixed(2))

export const castNumber = string => {
  const n = Number(string)
  return isFloat(n) ? castFloat(n) : n
}
