import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import includePaths from 'rollup-plugin-includepaths'
import resolve from 'rollup-plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'

export default [
  {
    input: 'src/index.js',
    external: [
      'react',
      'styled-components',
      'prop-types',
      'vanilla-masker',
      'react-dom',
      'formik',
      'next'
    ],
    output: [
      {
        file: 'dist/bundle.js',
        format: 'cjs',
        globals: { 'styled-components': 'styled' }
      },
      {
        file: 'dist/bundle.es.js',
        format: 'es',
        globals: { 'styled-components': 'styled' }
      }
    ],
    plugins: [
      external(),
      babel({
        plugins: [['babel-plugin-styled-components', { ssr: true }]],
        exclude: 'node_modules/**'
      }),
      resolve(),
      includePaths({ paths: ['./src/'] }),
      commonjs()
    ]
  }
]
