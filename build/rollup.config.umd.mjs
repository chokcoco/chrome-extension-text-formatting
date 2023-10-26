import base from './rollup.config.base.mjs';

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'content',
    file: 'dist/js/content.umd.js',
    format: 'umd',
    sourcemap: true,
  },
})

export default config;