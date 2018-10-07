const baseConfig = require('@airtheme/shared/rollup.config.js')

module.exports = {
  ...baseConfig,
  external: [
    ...baseConfig.external,
    'fp',
    '@airtheme/make',
    '@airtheme/ui',
    'react',
    'react-dom',
    'react-redux',
    'styled-components'
  ]
}
