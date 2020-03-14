import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import path from 'path';

import pkg from './package.json';

const config = {
  input: './src/index.tsx',
  output: [{
    file: pkg.main,
    format: 'cjs',
  }, {
    file: pkg.module,
    format: 'es',
  }],
  external: [
    ...Object.keys(pkg.peerDependencies),
    'styled-components',
  ],
  plugins: [
    typescript({
      tsconfig: path.resolve(__dirname, 'tsconfig.prod.json'),
    }),
    terser(),
    nodeResolve(),
    commonjs({
      include: /node_modules/,
      sourceMap: false,
    }),
  ],
};

export default config;
