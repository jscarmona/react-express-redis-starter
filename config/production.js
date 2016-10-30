export const gulp = {
  styles: {
    sass: {
      exitOnFail: true,
      style: 'compressed',
      sourcemap: false,
    },
    lint: {
      exitOnFail: true,
    },
  },
  clientScripts: {
    browserify: {
      min: true,
      exitOnFail: true,
    },
    lint: {
      exitOnFail: true,
    },
  },
  serverScripts: {
    browserify: {
      min: true,
      exitOnFail: true,
    },
    lint: {
      exitOnFail: true,
    },
  },
};
