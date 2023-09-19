import requireDir from 'require-dir';
import gulp from 'gulp';
import debug from 'gulp-debug';
import del from 'del';
import imagemin from 'gulp-imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminZopfli from 'imagemin-zopfli';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminGiflossy from 'imagemin-giflossy';
import newer from 'gulp-newer';
import browsersync from 'browser-sync';
import yargs from 'yargs';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import gulpif from 'gulp-if';
import svg from 'gulp-svg-sprite';
import dartsass from 'sass';
import gulpsass from 'gulp-sass';
import mincss from 'gulp-clean-css';
import groupmedia from 'gulp-group-css-media-queries';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import plumber from 'gulp-plumber';
import include from 'gulp-file-include';
import webp from 'gulp-webp';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';
import path from 'path';
import notify from 'gulp-notify';
import zip from 'gulp-zip';
import avif from 'gulp-avif';
import favicons from 'gulp-real-favicon';
import deploy from 'gh-pages';
import eslint from 'gulp-eslint';
import filter from 'gulp-filter';

export const plugins = {
    requireDir, gulp, favicons, debug, del, imagemin, imageminPngquant, imageminZopfli, imageminMozjpeg, imageminGiflossy, newer, browsersync, yargs, webpack, webpackStream, gulpif, svg, gulpsass, dartsass, mincss, groupmedia, autoprefixer, sourcemaps, plumber, include, webp, fonter, ttf2woff2, path, notify, zip, avif, deploy, eslint, filter,
};
