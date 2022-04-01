import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import jsx from 'rollup-plugin-jsx'
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';


const production = !process.env.ROLLUP_WATCH;
export default {
  input: 'src/index.js',
  outputs: {
    file: 'src/index.js',
    format: 'esm',
  },
  external: [
    'react',
    'react-redux',
    'react-router-dom',
    'redux'
  ],
  plugins: [
		resolve(), // tells Rollup how to find date-fns in node_modules
		commonjs(), // converts date-fns to ES modules
    babel({
      presets: ["@babel/preset-react"],
    }),
    nodeResolve({
      extensions: [".js"],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'development' )
    }),
    jsx( {factory: 'React.createElement'} ),
    production && terser() // minify, but only in production
	]
}
