import React from 'react'

const noop = () => null
const isEmpty = arr => !Boolean(arr.length)
const isArray = arr => Array.isArray(arr)

const AttributeContent = ({
  renderUnit = noop,
  renderEmpty = noop,
  content
}) => {
  // Handle most setting cases where content is array
  if (isArray(content)) {
    return isEmpty(content)
      ? renderEmpty()
      : content.map((unit, idx) => renderUnit({ unit, idx }))
  }

  // Handle base unit where content is object
  return renderUnit({ unit: content })
}

export default AttributeContent
