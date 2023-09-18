'use strict';

const gulp = require("gulp");
const less = require("gulp-less");
const cssmin = require("gulp-cssmin");
const rename = require("gulp-rename");
const watch = require("gulp-watch");

function compileLess() {
  return gulp
    .src("./src/styles/styles.less")
    .pipe(less().on("error", console.error))
    .pipe(cssmin())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./dist/styles"));
}

function watchFiles() {
  return watch("./src/styles/styles.less", compileLess);
}

exports.default = gulp.series(compileLess, watchFiles);





// 'use strict';

// // использование в файле пакетов
// const gulp = require('gulp');
// const less = require('gulp-less');
// const sass = require('gulp-sass')(require('sass'));
// const cssmin = require('gulp-cssmin');
// const rename = require('gulp-rename');
// // const concatCss = require('gulp-concat-css');


// // преобразование файлов
// function defaultTask() {
//   return gulp.src('./src/styles/*.less') // исходники преобразуем
//     .pipe(sass().on('error', sass.logError))
//     // .pipe(concatCss("styles.css")) // объединяем в один файл
//     .pipe(less())
//     .pipe(cssmin()) // минимизируем
//     .pipe(rename({ suffix: '.min' }))// минимизируем
//     .pipe(gulp.dest('./dist')); // размещаем в папку dist
// }

// exports.default = defaultTask

