import React from 'react'
const pretty = require('js-object-pretty-print').pretty

const Pretty = ({
  data,
  indentSize = 1,
  outputTo = 'PRINT',
  fullFunction = false
}) => (
  <pre>
    <code>{pretty(data, indentSize, outputTo, fullFunction)}</code>
  </pre>
)

export default Pretty
