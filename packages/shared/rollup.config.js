const babel = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')
const resolve =  require('rollup-plugin-node-resolve')

module.exports = {
  input: 'index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs()
  ]
}
