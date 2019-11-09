import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import replace from 'rollup-plugin-replace';

const config = {
  input: './demo/index.tsx',
  output: [{
    file: './demo/bundle.js',
    format: 'iife',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'styled-components': 'styled',
    },
  }],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    typescript(),
    babel(),
    commonjs({
      include: /node_modules/,
      sourceMap: false,
    }),
    serve('demo'),
    livereload(),
  ],
};

export default config;
