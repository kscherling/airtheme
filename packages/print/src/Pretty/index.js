import React from 'react'
const pretty = require('js-object-pretty-print').pretty
import Highlight, { defaultProps } from 'prism-react-renderer'

const Pretty = ({
  data,
  indentSize = 2,
  outputTo = 'PRINT',
  fullFunction = false
}) => {
  const format = pretty(data, indentSize, outputTo, fullFunction)

  return (
    <Highlight {...defaultProps} code={format} language="javascript">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, width: '100%' }}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default Pretty
