'use strict';

const {
    src, dest, parallel, series, watch
} = require('gulp');
const sass = require('gulp-sass');
const notify = require('gulp-notify');
const postcss = require("gulp-postcss");
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const fileinclude = require('gulp-file-include');
const svgSprite = require('gulp-svgstore');
const cheerio = require('gulp-cheerio');
const rename = require("gulp-rename");
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');
const fs = require('fs');
const del = require('del');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const uglify = require('gulp-uglify-es').default;
//const tiny = require('gulp-tinypng-compress');
const gutil = require('gulp-util');
const ftp = require('vinyl-ftp');


const fonts = () => {
    src('./src/fonts/**.ttf')
        .pipe(ttf2woff())
        .pipe(dest('./app/fonts/'))
    return src('./src/fonts/**.ttf')
        .pipe(ttf2woff2())
        .pipe(dest('./app/fonts/'))
}

const cb = () => {}

let srcFonts = './src/scss/_fonts.scss';
let appFonts = './app/fonts/';


const fontsStyle = (done) => {
    let file_content = fs.readFileSync(srcFonts);

    fs.writeFile(srcFonts, '', cb);
    fs.readdir(appFonts, function(err, items) {
        if (items) {
            let c_fontname;
            for (var i = 0; i < items.length; i++) {
                let fontname = items[i].split('.');
                fontname = fontname[0];
                if (c_fontname != fontname) {
                    fs.appendFile(srcFonts, '@include font-face("' + fontname + '", "' + fontname + '", 400);\r\n', cb);
                }
                c_fontname = fontname;
            }
        }
    })

    done();
}

const svgSprites = () => {
    return src('./src/img/icon-*.svg')
        .pipe(svgSprite())
        .pipe(cheerio({
                  run: function ($) {
                      $('[fill]').removeAttr('fill'),
                      $('[stroke]').removeAttr('stroke');
            },
            parserOptions: { xmlMode: true }
          }))
        .pipe(rename('sprite.svg'))
        .pipe(dest('./app/img'))
}

const styles = () => {
		return src(['./src/scss/**/*.scss','./src/scss/**/*.css'])
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'expanded'
		}).on('error', notify.onError()))
		.pipe(postcss([autoprefixer()]))
		.pipe(sourcemaps.write('.'))
		.pipe(dest('./app/css/'))
		.pipe(browserSync.stream());
}


const htmlInclude = () => {
    return src(['./src/**/*.html'])
        .pipe(fileinclude({
            prefix: '@',
            basepath: '@file'
        }))
        .pipe(dest('./app'))
        .pipe(browserSync.stream());
}

const imgToApp = () => {
    return src(['./src/img/**.jpg', './src/img/**.png', './src/img/**.jpeg'])
        .pipe(dest('./app/img'))
}

const resources = () => {
    return src('./src/resources/**')
        .pipe(dest('./app'))
}

const clean = () => {
    return del(['app/*']);
}

const scripts = () => {
	return src('./src/js/*.js')
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.write('.'))
		.pipe(dest('./app/js'))
		.pipe(browserSync.stream());
}

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });

  watch(['./src/scss/**/*.scss', './src/scss/**/*.css'], styles);
	watch(['./src/**/*.html', 'index.html'], htmlInclude);
	watch('./src/img/**.jpg', imgToApp);
	watch('./src/img/**.png', imgToApp);
	watch('./src/img/**.jpeg', imgToApp);

	watch('./src/img/**.svg', svgSprites);
	watch('./src/img/**.svg', imgToApp);
	watch('./src/resources/**', resources);
	watch('./src/fonts/**.ttf', fonts);
	watch('./src/fonts/**.ttf', fontsStyle);
	watch('./src/js/**/*.js', scripts);
};

exports.styles = styles;
exports.watchFiles = watchFiles;
exports.fileinclude = htmlInclude;

exports.default = series(clean, parallel(htmlInclude, scripts, fonts, resources, imgToApp, svgSprites), fontsStyle, styles, watchFiles);

const stylesBuild = () => {
	return src('./src/scss/**/*.scss')
		.pipe(sass({
			outputStyle: 'expanded'
		}).on('error', notify.onError()))
		.pipe(postcss([autoprefixer()]))
		.pipe(dest('./app/css/'))
}

const scriptsBuild = () => {
	return src('./src/js/main.js')
		.pipe(webpackStream({
				mode: 'development',
				output: {
					filename: 'main.js',
				},
				module: {
					rules: [{
						test: /\.m?js$/,
						exclude: /(node_modules|bower_components)/,
						use: {
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-env']
							}
						}
					}]
				},
			}))
			.on('error', function (err) {
				console.error('WEBPACK ERROR', err);
				this.emit('end'); // Don't stop the rest of the task
			})
		.pipe(uglify().on("error", notify.onError()))
		.pipe(dest('./app/js'))
}

exports.build = series(clean, parallel(htmlInclude, scriptsBuild, fonts, resources, imgToApp, svgSprites), fontsStyle, stylesBuild);




















