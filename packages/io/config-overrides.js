module.exports = function override(config, env) {
  config.resolve = {
    alias: {
      'styled-components': require.resolve('styled-components'),
      react: require.resolve('react'),
      redux: require.resolve('redux'),
      'react-redux': require.resolve('react-redux')
    }
  }
  return config
}
