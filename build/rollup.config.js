'use strict'

const path    = require('path')
const babel   = require('rollup-plugin-babel')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')

const pkg     = require(path.resolve(__dirname, '../package.json'))
const BUNDLE  = process.env.BUNDLE === 'true'
const year    = new Date().getFullYear()

let fileDest  = 'discui.js'
const external = ['jquery', 'perfect-scrollbar']
const plugins = [
  resolve(),
  commonjs(),
  babel({
    exclude: 'node_modules/**',
    externalHelpersWhitelist: [
      'defineProperties',
      'createClass',
      'inheritsLoose',
      'objectSpread'
    ]
  })
]
const globals = {
  jquery: 'jQuery',
  'perfect-scrollbar': 'PerfectScrollbar'
}

if (BUNDLE) {
  fileDest = 'discui.bundle.js'
  // Remove last entry in external array to bundle Popper
  external.pop()
  plugins.push(resolve())
}

module.exports = {
  input: path.resolve(__dirname, '../js/src/index.js'),
  output: {
    banner: `/*!
  * DiscUI v${pkg.version} (${pkg.homepage})
  * Copyright ${year} ${pkg.author.name}
  * Licensed under MIT (${pkg.homepage})
  */`,
    sourcemap: true,
    file: path.resolve(__dirname, `../dist/js/${fileDest}`),
    format: 'umd',
    globals,
    name: 'discui'
  },
  external,
  plugins
}