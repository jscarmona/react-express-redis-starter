import babelify from 'babelify';
import envify from 'envify';
import { SERVER_PATH } from './paths';

export default {
  browserify: {
    src: `${SERVER_PATH}/index.js`,
    dest: './',
    min: false,
    sourcemap: false,
    deps: ['lint:scripts-server'],
    options: {
      browserField: false,
      builtins: false,
      commondir: false,
      insertGlobalVars: {
        process: undefined,
        global: undefined,
        'Buffer.isBuffer': undefined,
        Buffer: undefined,
      },
      transform: [babelify, envify],
    },
  },
  eslint: {
    src: `${SERVER_PATH}/**/*.js`,
    exitOnFail: false,
  },
};
