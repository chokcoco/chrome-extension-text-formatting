import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import cjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';

const commonConfig = {
  plugins: [
    resolve({
      mainFields: ['module', 'jsnext', 'main', 'browser'],
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
    cjs({
      include: /node_modules/,
    }),
    livereload(),
  ],
  watch: {
    include: 'src/**',
  },
  external: []
};

export default {
  content: {
    input: 'src/content.js',
    ...commonConfig
  },
  background: {
    input: 'src/background.js',
    ...commonConfig
  }
};