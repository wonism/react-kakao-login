import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import replace from 'rollup-plugin-replace';
import path from 'path';

import pkg from './package.json';

const isProduction = process.env.NODE_ENV === 'production';

const plugins = isProduction ? [
  terser(),
] : [
  serve('demo'),
  livereload({
    watch: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'demo'),
      path.resolve(__dirname, 'demo-dev'),
    ],
    exts: ['html', 'js', 'tsx', 'ts'],
    verbose: true,
  }),
];

const config = {
  input: './demo-dev/index.tsx',
  output: [{
    file: './demo/bundle.js',
    format: 'iife',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'styled-components': 'styled',
    },
  }],
  external: [
    ...Object.keys(pkg.peerDependencies),
    'styled-components',
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': isProduction ? JSON.stringify('production') : JSON.stringify('development'),
    }),
    typescript({
      tsconfig: path.resolve(__dirname, 'tsconfig.dev.json'),
    }),
    babel(),
    commonjs({
      include: /node_modules/,
      sourceMap: false,
    }),
    ...plugins,
  ],
};

export default config;
