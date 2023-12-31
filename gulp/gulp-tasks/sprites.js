import { paths } from '../../gulpfile.babel';
import { plugins } from '../plugins';

plugins.gulp.task('sprites', () => {
    const result = plugins.gulp.src(paths.sprites.src)
        .pipe(plugins.svg({
            shape: {
                dest: 'intermediate-svg',
            },
            mode: {
                stack: {
                    sprite: '../sprite.svg',
                },
            },
        }))
        .pipe(plugins.gulp.dest(paths.sprites.app))
        .pipe(plugins.debug({
            title: 'Sprites',
        }))
        .on('end', plugins.browsersync.reload);
    return result;
});
