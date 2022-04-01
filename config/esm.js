import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: 'index.esm.js',
    dir: 'dist',
    format: 'esm'
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