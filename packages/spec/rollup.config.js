const baseConfig = require('@airtheme/shared/rollup.config.js')

module.exports = {
  ...baseConfig,
  external: [
    ...baseConfig.external,
    '@airtheme/make',
    '@airtheme/ui',
    '@airtheme/type',
    '@airtheme/mod',
    'react',
    'react-dom',
    'react-redux',
    'styled-components'
  ]
}
