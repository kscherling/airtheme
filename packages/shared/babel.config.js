module.exports = {
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties'
  ],
  env: {
    build: {
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-react'
      ],
    },
    test: {
      presets: [
        ['@babel/preset-env'], { modules: 'cjs' },
        '@babel/preset-react'
      ]
    }
  }
}
