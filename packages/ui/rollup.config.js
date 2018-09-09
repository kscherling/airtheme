const baseConfig = require('@airtheme/shared/rollup.config.js')

module.exports = {
  ...baseConfig,
  external: [
    ...baseConfig.external,
    'react',
    'react-dom',
    'react-redux',
    'styled-components',
    'react-popper'
  ]
}
