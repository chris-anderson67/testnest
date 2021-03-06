import { writeFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';
import gulp = require('gulp');
const g = require('gulp-load-plugins')();

gulp.task('eslint', () => {
    return gulp.src('src/**/*.ts', { since: g.memoryCache.lastMtime('source') })
        .pipe(g.memoryCache('source'))
        .pipe(g.ignore.exclude('*.d.ts'))
        .pipe(g.if('*.spec.ts', specLint(), sourceLint()))
        .pipe(g.eslint.format());
});

gulp.task('eslint:w', (done) => {
    const w = gulp.watch('src/**/*.ts', { ignoreInitial: false }, gulp.series('eslint'));
    w.on('change', g.memoryCache.update('source'));
    w.on('unlink', file => g.memoryCache.forget('source', file, file => resolve(file)));
    process.on('SIGINT', () => {
        w.close();
        done();
    });
});

function sourceLint() {
    return g.eslint();
}

function specLint() {
    const eslintrc = require('./.eslintrc.js');
    const [severity, tslintConfig] = eslintrc.rules['tslint/config'];
    return g.eslint({
        rules: {
            'jasmine/no-spec-dupes': 0,
            'lodash/import-scope': 0,
            'prefer-const': 0,
            'import/no-duplicates': 0,
            'import/max-dependencies': 0,
            'tsc/config': 0,
            'tslint/config': [0, {
                ...tslintConfig,
                rules: {
                    ...tslintConfig.rules,
                    'no-implicit-dependencies': false,
                }
            }],
        }
    });
}
