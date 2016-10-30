import babelify from 'babelify';
import envify from 'envify';
import { CLIENT_PATH, PUBLIC_PATH } from './paths';

export default {
  browserify: {
    src: `${CLIENT_PATH}/main.js`,
    dest: `${PUBLIC_PATH}/js`,
    min: false,
    sourcemap: true,
    deps: ['lint:scripts-client'],
    options: {
      transform: [babelify, envify],
    },
  },
  eslint: {
    src: `${CLIENT_PATH}/**/*.js`,
    exitOnFail: false,
  },
};
