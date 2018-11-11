import { curry } from '@airtheme/core'

const bemFor = curry((block, element, modifier) => {
  if (block && element && modifier) {
    return `${block}__${element}_${modifier}`
  }

  if (block && element) {
    return `${block}__${element}`
  }

  if (block && modifier) {
    return `${block}_${modifier}`
  }

  if (element && modifier) {
    return `${element}_${modifier}`
  }

  if (block || element || modifier) {
    return `${block || element || modifier}`
  }
})

export const bemForBase = bemFor('base')
export const bemForSetting = bemFor('setting')

export default bemFor
