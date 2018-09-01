const babel = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')
const resolve = require('rollup-plugin-node-resolve')

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    sourcemap: true
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs()
  ],
  external: []
}
