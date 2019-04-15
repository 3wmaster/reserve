var gulp = require('gulp'),
    webpack = require('webpack-stream'),
    postcss = require('gulp-postcss'), //pipe CSS through several plugins, but parse CSS only once.
    cssvariables = require('postcss-css-variables'), // transform CSS variables
    autoprefixer = require('autoprefixer'), //add vendor prefixes
    cssnano = require('cssnano'), // minifier
	cssimport = require("gulp-cssimport"), //replaces the import
    color = require('gulp-color'), // color  console,

    srcCSS = 'src/css/reserve.css',
	destCSS = '../static/css',
	fileCSS = 'reserve', /* not use */

    srcJS = 'src/js/reserve.js',
    destJS = '../static/js',
    fileJS = 'reserve.js',

	taskCSS = function (src, dest, file, ver) {
		console.log(color('start CSS ' + ver + ' task', 'BLUE'));
        gulp.src(src)
            .pipe(cssimport({}))
            .on('error', function(err){
                console.log(color('CSS ' + ver + ' task error - ' + err.message, 'RED'));
            })
            .pipe(postcss([
                cssvariables(),
                autoprefixer(),
                cssnano()
            ]))
            .on('error', function(err){
                console.log(color('CSS ' + ver + ' task error - ' + err.message, 'RED'));
            })
            .pipe(gulp.dest(dest))
            .on('end', function(){
                console.log(color('CSS ' + ver + ' task success', 'GREEN'));
            });
	},

    taskJS = function(src, dest, file, ver) {
        console.log(color('start JS ' + ver + ' task', 'BLUE'));
        gulp.src(src)
            .pipe(webpack({output: {filename: file} }))
            .pipe(gulp.dest(dest))
            .on('end', function(){
                console.log(color('JS ' + ver + ' task success', 'GREEN'));
            });
    };

//
gulp.task('default',  function() {
    taskCSS(srcCSS, destCSS, fileCSS, 'base');
    taskJS(srcJS, destJS, fileJS, 'base');
});








