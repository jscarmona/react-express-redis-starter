import * as ignite from 'gulp-ignite';
import browserify from 'gulp-ignite-browserify';
import mocha from 'gulp-ignite-mocha';
import istanbul from 'gulp-ignite-istanbul';
import sass from 'gulp-ignite-sass';
import sassLint from 'gulp-ignite-sass-lint';
import eslint from 'gulp-ignite-eslint';
import config from 'config';

const gulpConfig = config.get('gulp');

ignite.run('build', ['coverage:scripts', 'scripts', 'styles']);
ignite.run('dev', ['scripts', 'styles', ['watch:scripts', 'watch:styles']]);

// Styles
ignite.task('styles', sass, gulpConfig.styles.sass);
ignite.task('lint:styles', sassLint, gulpConfig.styles.sassLint);
ignite.watch('watch:styles', gulpConfig.styles.sassWatchFiles, ['styles']);

// Scripts
ignite.run('scripts', ['scripts-server', 'scripts-client']);
ignite.run('lint:scripts', ['lint:scripts-server', 'lint:scripts-client']);

ignite.task('test:scripts', mocha, gulpConfig.scripts.mocha);
ignite.task('coverage:scripts', istanbul, gulpConfig.scripts.istanbul);
ignite.watch('watch:scripts', gulpConfig.scripts.browserifyWatchFiles, ['scripts']);
ignite.watch('watch:test:scripts', gulpConfig.scripts.mochaWatchFiles, ['test:scripts']);

// Client Scripts
ignite.task('scripts-client', browserify, gulpConfig.clientScripts.browserify);
ignite.task('lint:scripts-client', eslint, gulpConfig.clientScripts.eslint);

// Server Scripts
ignite.task('scripts-server', browserify, gulpConfig.serverScripts.browserify);
ignite.task('lint:scripts-server', eslint, gulpConfig.serverScripts.eslint);
