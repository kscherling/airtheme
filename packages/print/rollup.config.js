const baseConfig = require('@airtheme/shared/rollup.config.js')

module.exports = {
  ...baseConfig,
  external: [
    ...baseConfig.external,
    '@airtheme/make',
    '@airtheme/assemble',
    'react',
    'react-dom',
    'react-redux',
    'styled-components'
  ]
}
