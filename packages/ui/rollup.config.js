const baseConfig = require('@airtheme/shared/rollup.config.js')

module.exports = {
  ...baseConfig,
  external: [
    ...baseConfig.external,
    'fp',
    'react',
    'react-dom',
    'react-redux',
    'styled-components',
    'react-popper'
  ]
}
