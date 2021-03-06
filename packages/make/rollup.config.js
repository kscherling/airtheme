const baseConfig = require('@airtheme/shared/rollup.config.js')

module.exports = {
  ...baseConfig,
  external: [
    ...baseConfig.external,
    'fp',
    '@airtheme/type',
    '@airtheme/core',
    'react',
    'react-redux',
    'styled-components'
  ]
}
