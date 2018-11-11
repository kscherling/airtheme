import { curry } from '@airtheme/core'
import { normalizeAll } from './normalize'

const formatBem = curry((_block, _element, _modifier) => {
  const [block, element, modifier] = normalizeAll([_block, _element, _modifier])

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

export const formatBemWithBase = formatBem('base')
export const formatBemWithSetting = formatBem('setting')

export default formatBem
