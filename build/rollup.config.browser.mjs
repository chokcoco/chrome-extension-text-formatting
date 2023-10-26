import base from './rollup.config.base.mjs';
import { terser } from 'rollup-plugin-terser';

const commonConfig = {
  format: 'iife',
  sourcemap: true,
}

const configContent = Object.assign({}, base.content, {
  output: {
    exports: 'named',
    name: 'content',
    file: 'dist/js/content.min.js',
    globals: {},
    ...commonConfig
  },
});
const configBackground = Object.assign({}, base.background, {
  output: {
    exports: 'named',
    name: 'background',
    file: 'dist/js/background.min.js',
    globals: {
      'pangu': 'https://jspm.dev/pangu@4.0.7'
    },
    external: ['pangu'],
    ...commonConfig
  },
});

configContent.plugins.push(terser());
configBackground.plugins.push(terser());

console.log('configContent', configContent);
console.log('configBackground', configBackground);

export default [configContent, configBackground];