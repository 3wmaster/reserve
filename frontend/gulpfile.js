var gulp = require('gulp'),
    postcss = require('gulp-postcss'), //pipe CSS through several plugins, but parse CSS only once.
    cssvariables = require('postcss-css-variables'), // transform CSS variables
    autoprefixer = require('autoprefixer'), //add vendor prefixes
    cssnano = require('cssnano'), // minifier
	cssimport = require("gulp-cssimport"), //replaces the import
    color = require('gulp-color'), // color  console,

    srcCSS = 'src/css/base.css',
	destCSS = 'assets/css',
	fileCSS = 'base',

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
	}

//
gulp.task('default',  function() {
    taskCSS(srcCSS, destCSS, fileCSS, 'base');
});








