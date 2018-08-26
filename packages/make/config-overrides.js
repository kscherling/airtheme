module.exports = function override(config, env) {
  config.resolve = {
    alias: {
      'react-redux': require.resolve('react-redux')
    }
  }
  return config
}
