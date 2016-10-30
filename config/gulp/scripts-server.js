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
      transform: [babelify, envify],
    },
  },
  eslint: {
    src: `${SERVER_PATH}/**/*.js`,
    exitOnFail: false,
  },
};
