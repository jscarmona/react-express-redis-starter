import { CLIENT_PATH, PUBLIC_PATH } from './paths';

export default {
  sass: {
    src: `${CLIENT_PATH}/main.scss`,
    dest: `${PUBLIC_PATH}/css`,
    style: 'expanded',
    sourcemap: true,
    options: {
      includePaths: ['./node_modules'],
    },
    exitOnFail: false,
    deps: ['lint:styles'],
  },
  sassLint: {
    src: `${CLIENT_PATH}/**/*.scss`,
    configFile: './.sass-lint.yml',
    exitOnFail: false,
  },
  sassWatchFiles: `${CLIENT_PATH}/**/*.scss`,
};
