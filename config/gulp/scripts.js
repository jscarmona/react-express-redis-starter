import { SRC_PATH } from './paths';

export default {
  mocha: {
    src: `${SRC_PATH}/*.spec.js`,
    mocha: {
      require: `${SRC_PATH}/main.spec.js`,
      compilers: 'js:babel-core/register',
    },
  },
  istanbul: {
    src: [
      `${SRC_PATH}/*.js`,
      `!${SRC_PATH}/*.spec.js`,
    ],
    testTask: 'test:scripts',
  },
  browserifyWatchFiles: `${SRC_PATH}/**/*.js`,
  mochaWatchFiles: `${SRC_PATH}/**/*.js`,
};
