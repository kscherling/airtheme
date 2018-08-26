module.exports = function override(config, env) {
  config.resolve = {
    alias: {
      'styled-components': require.resolve('styled-components')
    }
  }
  return config
}
