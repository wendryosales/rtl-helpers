import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: 'index.js',
    dir: 'dist',
    format: 'cjs'
  },
  external: [
    'react',
    'react-redux',
    'react-router-dom',
    'redux'
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs({
      include: 'node_modules/**'
    })
  ]
};