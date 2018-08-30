module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false }],
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties'
  ],
  env: {
    test: {
      presets: [
        ['@babel/preset-env'], { modules: 'commonjs' },
        '@babel/preset-react'
      ]
    }
  }
}
