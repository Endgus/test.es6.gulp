import gulp from 'gulp';
import sass from 'gulp-sass';
import browserSync from 'browser-sync';
import concat from 'gulp-concat';
import uglifyjs from 'gulp-uglifyjs';
import imagemin from 'gulp-imagemin';
import pngquant from'imagemin-pngquant';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import babel from 'gulp-babel';


gulp.task('minify-css', () => {  // minify CSS
    return gulp.src('app/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('library', () => {  // минификация скриптов и сохранение их всех в один файл
    return gulp.src(['app/js/es5/*.js'])//select array jquery...
        .pipe(concat('all-script.min.js'))
        .pipe(uglifyjs())// min js
        .pipe(gulp.dest('dist/js'));
});
gulp.task('ES6', () => {
    return gulp.src('app/js/*.js')
        .pipe(babel())
        .pipe(gulp.dest('app/js/es5'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('rebuild', () => {  // выбираем файлы библиотек и сохраняем нужные
    let bootstrap = gulp.src('app/libs/bootstrap/dist/css/*.min.css')
       .pipe(gulp.dest('app/css'));
    let bootstrapjs = gulp.src('app/libs/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest('app/js'));
});

gulp.task('img', () => {
    return gulp.src('app/images/**/*')
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox:false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('sass', () => {
    return gulp.src('app/sass/*.+(scss|sass)')
        .pipe(sass())
        .pipe(autoprefixer(['last 5 versions']))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('browser-sync', () => {
    browserSync({
        server:{baseDir: 'app'}
    });
});

gulp.task('watch',['browser-sync', 'sass', 'ES6'], () => { // ['browser-sync', 'sass'] - start before WATCH
    gulp.watch('app/sass/*.+(scss|sass)', ['sass']);
    gulp.watch('app/js/*.js', ['ES6']);
    gulp.watch('app/*.html', browserSync.reload); // reload .html file (You can also add .js file ets..)
});

gulp.task('build', ['minify-css', 'library', 'img'], () => {
    /*
    var css = gulp.src('app/css/*.css')
        .pipe(gulp.dest('dist/css'));
    var js = gulp.src('app/js/*.js')
        .pipe(gulp.dest('dist/js'));
    var images = gulp.src('app/images/*')
        .pipe(gulp.dest('dist/images'));
    var fonts = gulp.src('app/fonts/*')
        .pipe(gulp.dest('dist/fonts'));
        */
    let index = gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));
    let bootstrap = gulp.src('app/libs/bootstrap/dist/css/*.min.css')
        .pipe(gulp.dest('dist/css'));
    let bootstrapjs = gulp.src('app/libs/bootstrap/dist/js/*.min.js')
        .pipe(gulp.dest('dist/js'));
    let jquery = gulp.src('app/libs/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('dist/js'));
});