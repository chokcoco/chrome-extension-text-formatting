import base from './rollup.config.base.mjs';

const config = Object.assign({}, base, {
  output: {
    name: 'content',
    file: 'dist/js/content.esm.js',
    format: 'es',
    sourcemap: true,
  },
  external: [
    ...base.external,
  ],
})

export default config;